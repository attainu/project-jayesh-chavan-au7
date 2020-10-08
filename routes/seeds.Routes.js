import express from 'express'
import seedsController from '../controllers/seedsController'

const Router = express.Router()

Router.get('/insert-volunteers', seedsController.insertVolunteer)
Router.get('/insert-bloodbanks', seedsController.insertBloodBanks)

module.exports = Router