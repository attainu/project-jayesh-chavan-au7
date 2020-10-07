import express from 'express'
import volunteerAuthController from '../controllers/volunteerAuthController'
import isAuthVolunteer from '../utils/isAuthVolunteer'

const Router = express.Router()

Router.post('/signup', volunteerAuthController.signup )
Router.post('/login', volunteerAuthController.login )
Router.get('/logout', volunteerAuthController.logout )
Router.get('/get-user', isAuthVolunteer, volunteerAuthController.getUser)
Router.post('/update-user', isAuthVolunteer, volunteerAuthController.updateUser)
Router.get('/delete-user', isAuthVolunteer, volunteerAuthController.deleteUser)
Router.get('/findall', volunteerAuthController.findAll)

module.exports = Router