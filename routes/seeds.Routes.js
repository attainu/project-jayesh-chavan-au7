import express from 'express'
import { VolunteerModel, BloodBankModel } from '../models'
// import volunteerSeeds from '../seeds/volunteerSeed.json'
// import bloodBankSeeds from '../seeds/bloodBankSeed.json'

const Router = express.Router()

Router.get('/insert-volunteers', async (req,res) => {
    try {
        await VolunteerModel.insertMany(volunteerSeeds)
        res.status(200).send("done")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

Router.get('/insert-bloodbanks', async (req,res) => {
    try {
        await BloodBankModel.insertMany(bloodBankSeeds)
        res.status(200).send("done")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = Router