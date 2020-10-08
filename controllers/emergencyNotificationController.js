import dotenv from "dotenv";
dotenv.config();
import fast2sms from "fast-two-sms";
import { VolunteerModel } from "../models";

class EmergencyNotificationController {

    async notification(req,res,next){
        try {
            let volunteersContact = await VolunteerModel.find(
                {
                    city: req.body.city,
                    status: true,
                    blood_group: req.body.blood_group,
                },
                "mob_no"
            );
            const volunteersNumbers = [];
    
            volunteersContact.forEach((volunteer) => {
                if (volunteer.mob_no && volunteer.mob_no.length !== 0) {
                    volunteersNumbers.push(volunteer.mob_no);
                }
            });
    
            if (volunteersNumbers.length === 0) {
                res.status(200).send("No Volunteers");
                return;
            }
    
            const msgBody = `Emergency !! 
            Someone is in urgent need of blood with blood group similar to your blood group, 
            if you are available please help ! For more information please contact to ${req.body.contact}
            `;
    
            const options = {
                authorization: process.env.FAST_TWO_SMS,
                message: msgBody,
                numbers: volunteersNumbers,
            };
            const smsStatus = await fast2sms.sendMessage(options);
            res.status(200).send(smsStatus);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new EmergencyNotificationController()