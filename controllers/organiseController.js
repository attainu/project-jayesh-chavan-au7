import dotenv from 'dotenv'
dotenv.config()
import fast2sms from 'fast-two-sms'
import { OrganiseModel, VolunteerModel } from '../models'

class OrganiseController {

    async createCamp (req,res,next){
        try {
            const event = new OrganiseModel(req.body)
            await event.save()
            res.status(200).send(event)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    async updateCamp (req,res,next){
        try {
            const { id } = req.query
            await OrganiseModel.findByIdAndUpdate(id, req.body)
            res.status(200).send('done')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    async findCamp (req,res,next){
        try {
            const camps = await OrganiseModel.find()
            res.status(200).send(camps)
        } catch (error) {
            res.status(200).send(error.message)
        }
    }

    async campNotification (req,res,next){
        try {

            let volunteersContact = await VolunteerModel.find({ city : req.body.city },'mob_no')
            const volunteersNumbers = []
    
            volunteersContact.forEach( (volunteer) => {
                if (volunteer.mob_no && volunteer.mob_no.length !== 0){
                    volunteersNumbers.push(volunteer.mob_no)
                }
            } )
    
            if(volunteersNumbers.length === 0){
                res.status(200).send("No Volunteers")
                return
            }
    
            const msgBody = `Blood Camp Invitation
                Organised by ${req.body.organiser}
                Venue : ${req.body.address}
                Time : ${req.body.time}
                For more information please contact to orgniser at ${req.body.email}
            `
    
            const options = {
                authorization : process.env.FAST_TWO_SMS,
                message : msgBody,
                numbers  : volunteersNumbers
            }
            const smsStatus = await fast2sms.sendMessage(options)
            res.status(200).send(smsStatus)
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message)
        }
    }
}

module.exports = new OrganiseController()