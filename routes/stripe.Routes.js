import express from 'express'
import stripeController from '../controllers/stripeCotroller'

const Router = express.Router()

Router.post('/donate', stripeController.donate)

module.exports = Router