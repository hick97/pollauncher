const mongoose = require('mongoose')

const ObjectiveQuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Alternatives'
    }
  ],
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

module.exports = mongoose.model('ObjectiveQuestion', ObjectiveQuestionSchema)
