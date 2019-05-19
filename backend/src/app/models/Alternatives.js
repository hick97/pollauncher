const mongoose = require('mongoose')

const AlternativesSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Alternatives', AlternativesSchema)
