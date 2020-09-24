import express from 'express'
import volunteerAuthController from '../controllers/volunteerAuthController'
import isAuthVolinteer from '../utils/isAuthVolunteer'

const Router = express.Router()

Router.post('/signup', volunteerAuthController.signup )
Router.post('/login', volunteerAuthController.login )
Router.get('/logout', volunteerAuthController.logout )
Router.get('/get-user', isAuthVolinteer, volunteerAuthController.getUser)
Router.post('/update-user', isAuthVolinteer, volunteerAuthController.updateUser)
Router.get('/delete-user', isAuthVolinteer, volunteerAuthController.deleteUser)

module.exports = Router