import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

import contactRouter from './Routes/Contacts.js'

dotenv.config({ path: './config.env' })

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rawOrigin = process.env.CLIENT_ORIGIN || '*'
const allowedOrigin = rawOrigin !== '*' ? rawOrigin.replace(/\/$/, '') : '*'

app.use(
  cors({
    origin: allowedOrigin === '*' ? '*' : [allowedOrigin, `${allowedOrigin}/`],
  }),
)
app.use(express.json())
app.use(morgan('dev'))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API running', time: new Date().toISOString() })
})

app.use('/api/contact', contactRouter)

app.get('/api/download/resume/pdf', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.pdf')
  res.download(filePath, 'Prakhar_Agrawal_Resume.pdf', (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ message: 'Failed to download PDF' })
    }
  })
})

app.get('/api/download/resume/docx', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'resume.docx')
  res.download(filePath, 'Prakhar_Agrawal_Resume.docx', (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ message: 'Failed to download DOCX' })
    }
  })
})

const MONGO_URI = process.env.MONGO_URI

const PORT = process.env.PORT || 5000

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error', err)
    process.exit(1)
  })

export default app