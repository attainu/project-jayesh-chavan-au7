import express from 'express'
import homeConroller from '../controllers/homeController'

const Router = express.Router()

Router.get('/assets', homeConroller.assets)

module.exports = Router