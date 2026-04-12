import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        message: { type: String, required: true, trim: true },
    },
    {
        timestamps: { createdAt: 'createdAt', updatedAt: false },
    },
)

const Contact = mongoose.model('Contact', contactSchema)

export default Contact