const express = require('express')
const prom = require('prom-client')

// Config
const APP_NAME = process.env.APP_NAME || 'undefined'
const PORT     = process.env.PORT     || 3000;
const DELAY    = process.env.DELAY    || 0

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

  setTimeout(() => {
    res.status(200).send(`${APP_NAME}`)
  }, DELAY)
})

app.get('/hello', (_req, res) => {
  res.status(200).send(`hello from ${APP_NAME}`)
})

app.get('/hello/*', (_req, res) => {
  res.status(200).send(`hello from ${APP_NAME}`)
})

app.get('/not-found', (_req, res) => {
  const errorPage = `<html>Er.. Congratulations, you broke the Internet</html>`

  res.status(200).send(errorPage)
})

app.get('/secret', (_req, res) => {
  res.status(200).send("It's strictly confidential!")
})

app.get('/health', (_req, res) => {
  res.status(200).send("I'm OK")
})

app.listen(PORT, () => {
  console.log(`${APP_NAME} is listening at http://localhost:${PORT}`)
})