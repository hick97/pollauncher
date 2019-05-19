const ObjectiveQuestion = require('../models/ObjectiveQuestion')

class ObjectiveQuestionController {
  async store (req, res) {
    const question = await ObjectiveQuestion.create(req.body)

    res.json(question)
  }
  async list (req, res) {
    const { id } = req.params

    const question = await ObjectiveQuestion.findById(id).populate('options')

    res.json(question)
  }
  async update (req, res) {
    const { id } = req.params
    const { question, options } = req.body
    var result

    if (question) {
      result = await ObjectiveQuestion.findByIdAndUpdate(
        id,
        {
          question: question,
          options: options
        },
        {
          new: true
        }
      )
    }

    res.json(result)
  }
}

module.exports = new ObjectiveQuestionController()
