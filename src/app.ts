import express from 'express'
import dotenv from "dotenv"
import routertasks from "./routes/routerFilmes.js"

dotenv.config()
const server = express()

server.use(express.json())
server.use(routertasks)

server.get('/health', (req, res) => {
    res.send('ok')
})

server.listen(process.env.PORT, () => {
    console.log('Ta executando...')
})