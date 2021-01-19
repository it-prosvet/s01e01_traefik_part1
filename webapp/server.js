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

const metrics = (_, res, next) => {
  reqCounter.inc()
  next()
}

// Configuring Express app
const app = express()

app.use(metrics)

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', prom.register.contentType)

  const metrics = await prom.register.metrics()
  res.status(200).send(metrics)
})

// Handlers
app.get('/', (req, res) => {
  const time = new Date().toISOString()
  console.log(`[${time}] handling request from ${APP_NAME}`)

  setTimeout(() => {
    res.status(200).send(`hello from ${APP_NAME}`)
  }, DELAY)
})

app.listen(PORT, () => {
  console.log(`${APP_NAME} is listening at http://localhost:${PORT}`)
})