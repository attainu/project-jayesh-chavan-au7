import { VolunteerModel, BloodBankModel } from '../models'
// import volunteerSeeds from '../seeds/volunteerSeed.json'
// import bloodBankSeeds from '../seeds/bloodBankSeed.json'

class SeedsController {

    async insertVolunteer (req,res,next) {
        try {
            await VolunteerModel.insertMany(volunteerSeeds)
            res.status(200).send("done")
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    async insertBloodBanks (req,res,next) {
        try {
            await BloodBankModel.insertMany(bloodBankSeeds)
            res.status(200).send("done")
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new SeedsController()