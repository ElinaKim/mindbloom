import express from 'express'
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const server = http.createServer(app)

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World')
})

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
