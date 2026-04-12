import { Router } from 'express'
import Contact from '../models/contacts.js'

const router = Router()

router.post('/', async (req, res) => {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'name, email, and message are required' })
    }

    try {
        const contact = await Contact.create({ name, email, message })

        res.status(201).json({ message: 'Contact stored', contactId: contact._id })
    } catch (err) {
        console.error('Failed to store contact', err)
        res.status(500).json({ message: 'Failed to store contact' })
    }
})

export default router