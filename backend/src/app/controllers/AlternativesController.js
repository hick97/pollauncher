const Alternatives = require('../models/Alternatives')

class AlternativesController {
  async store (req, res) {
    const alternative = await Alternatives.create(req.body)

    res.json(alternative)
  }
  async list (req, res) {
    const { id } = req.params

    const alternative = await Alternatives.findById(id).populate('options')

    res.json(alternative)
  }
  async update (req, res) {
    const alt = await Alternatives.findById(req.params.id)

    alt.set({ votes: alt.votes + 1 })

    await alt.save()

    return res.json(alt)
  }
}

module.exports = new AlternativesController()
