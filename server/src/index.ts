import express from 'express'
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'
// import userRoutes from './routes/user-routes';
import taskRoutes from './routes/task-routes';


dotenv.config()

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.use('/tasks', taskRoutes)

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
