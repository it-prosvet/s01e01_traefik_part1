const express = require('express')
const prom = require('prom-client')

// Config
const APP_NAME = process.env.APP_NAME || 'undefined'
const PORT     = process.env.PORT     || 3000;

// Metrics
const defaultLabels = { app: APP_NAME };
prom.register.setDefaultLabels(defaultLabels);

const reqCounter = new prom.Counter({
  name: 'http_requests_total',
  help: 'total number of HTTP requests served',
});

const metrics = (_req, _res, next) => {
  reqCounter.inc()
  next()
}

// Configuring Express app
const app = express()

app.use(metrics)

app.get('/metrics', async (_req, res) => {
  res.setHeader('Content-Type', prom.register.contentType)

  const metrics = await prom.register.metrics()
  res.status(200).send(metrics)
})

// Handlers
app.get('/', (_req, res) => {
  const time = new Date().toISOString()
  console.log(`[${time}] handling request from ${APP_NAME}`)

  res.status(200).send(`${APP_NAME}\n`)
})

const sayHello = (_req, res) => {
  res.status(200).send(`hello from ${APP_NAME}`)
}

app.get('/hello', sayHello)
app.get('/hello/*', sayHello)

app.get('/not-found', (_req, res) => {
  const errorPage = `<html>Er.. Congratulations, you broke the Internet</html>`

  res.status(200).send(errorPage)
})

app.get('/failing', (_req, res) => {
  if (Math.random(1) < 0.3) {
    res.status(503).send("Oops!")
  }
  else {
    res.status(200).send("Here we go!")
  }
})

app.get('/health', (_req, res) => {
  res.status(200).send("I'm OK")
})

app.listen(PORT, () => {
  console.log(`${APP_NAME} is listening at http://localhost:${PORT}`)
})