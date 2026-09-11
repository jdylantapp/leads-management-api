import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

import leadRoutes from './routes/leads.js'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send("API running")
})

app.use('/api/leads', leadRoutes)

const PORT = process.env.PORT || 5001

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('MongoDB connection error', error)
    })