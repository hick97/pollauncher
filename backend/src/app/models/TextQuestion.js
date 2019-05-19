const mongoose = require('mongoose')

const TextQuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    default: ''
  },
  answers: [
    {
      type: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('TextQuestion', TextQuestionSchema)
