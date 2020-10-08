import { VolunteerModel, DonationModel, BloodBankModel, OrganiseModel } from '../models'

class HomeController{

    async assets(req,res,next){
        try {
            const numberOfVolunteers = await VolunteerModel.estimatedDocumentCount()
            const numberOfBloodBanks = await BloodBankModel.estimatedDocumentCount()
            const numberOfDonations = await DonationModel.estimatedDocumentCount()
            const camp = await OrganiseModel.find()
            const campFirbaseUrl = []
            camp.forEach( event => {
                if( event.poster.firebaseUrl && event.poster.firebaseUrl.length !== 0){
                    campFirbaseUrl.push(event)
                }
            })
            res.status(200).send({ numberOfVolunteers,numberOfBloodBanks, numberOfDonations, campFirbaseUrl })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}

module.exports = new HomeController()