const mongoose = require('mongoose')

const pothoSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longetitude: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Pothole = mongoose.model('Pothole', pothoSchema)

module.exports = Pothole