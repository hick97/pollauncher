const express = require('express')
const routes = express.Router()

const TextQuestionController = require('./app/controllers/TextQuestionController')
const ObjectiveQuestionController = require('./app/controllers/ObjectiveQuestionController')
const AlternativesController = require('./app/controllers/AlternativesController')

routes.get('/', (req, res) => {
  res.send('OK')
})

// TEXT QUESTIONS
routes.get('/question/text/:id', TextQuestionController.list)

routes.post('/question/text', TextQuestionController.store)

routes.put('/question/text/:id', TextQuestionController.update)

// OBJECTIVE QUESTIONS
routes.get('/question/objective/:id', ObjectiveQuestionController.list)

routes.post('/question/objective', ObjectiveQuestionController.store)

routes.put('/question/objective/:id', ObjectiveQuestionController.update)

// ALTERNATIVES
routes.get('/question/alternatives/:id', AlternativesController.list)

routes.post('/question/alternatives', AlternativesController.store)

routes.put('/question/alternatives/:id', AlternativesController.update)

module.exports = routes
