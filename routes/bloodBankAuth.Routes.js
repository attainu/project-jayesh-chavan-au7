import express from 'express'
import bloodBankAuthController from '../controllers/bloodBankAuthController'
import isAuthBloodBank from '../utils/isAuthBloodBank'

const Router = express.Router()

Router.post('/signup', bloodBankAuthController.signup )
Router.post('/login', bloodBankAuthController.login )
Router.get('/logout', bloodBankAuthController.logout )
Router.get('/get-bank', isAuthBloodBank, bloodBankAuthController.getBank)
Router.post('/update-bank', isAuthBloodBank, bloodBankAuthController.updateBank)
Router.get('/delete-bank', isAuthBloodBank, bloodBankAuthController.deleteBank)
Router.get('/findall', bloodBankAuthController.findAll)

module.exports = Router