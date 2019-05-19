const TextQuestion = require('../models/TextQuestion')

class TextQuestionController {
  async store (req, res) {
    const question = await TextQuestion.create(req.body)

    res.json(question)
  }
  async update (req, res) {
    const { id } = req.params
    const { question, answers } = req.body
    var result
    console.log(answers)

    if (!answers) {
      result = await TextQuestion.findByIdAndUpdate(
        id,
        {
          question: question
        },
        {
          new: true
        }
      )
    } else {
      result = await TextQuestion.findByIdAndUpdate(
        id,
        {
          answers: answers
        },
        {
          new: true
        }
      )
    }

    res.json(result)
  }
  async list (req, res) {
    const { id } = req.params

    const question = await TextQuestion.findById(id)

    res.json(question)
  }
}

module.exports = new TextQuestionController()
