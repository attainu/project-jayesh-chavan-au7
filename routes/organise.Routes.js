import express from 'express'
import organiseController from '../controllers/organiseController'

const Router = express.Router()

Router.post('/create', organiseController.createCamp)
Router.post('/update', organiseController.updateCamp)
Router.get('/findall-camp', organiseController.findCamp)
Router.post('/camp-notification', organiseController.campNotification)

module.exports = Router