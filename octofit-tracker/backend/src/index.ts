import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = Number(process.env.PORT ?? 8000)
const MONGODB_URI = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running' })
})

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`Connected to MongoDB at ${MONGODB_URI}`)

    app.listen(PORT, () => {
      console.log(`OctoFit Tracker backend listening on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start backend:', error)
    process.exit(1)
  }
}

startServer()
