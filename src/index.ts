import './env'
import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.send('Yo')
})

const port = Number(process.env.SERVER_PORT) || 80
app.listen(port, () => {
  console.log('listening on port', port)
})
