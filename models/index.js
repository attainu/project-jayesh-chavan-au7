import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import VolunteerSchema from './volunteerModel'
import BloodBankSchema from './bloodBankModel'
import OrganiseSchema from './organiseModel'
import DonationSchema from './donationModel'

const conn = mongoose.createConnection(
    process.env.MONGODB_ATLAS_URL || process.env.MONGODB_LOCAL_URL,
    {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
    },
    (err) => {
        if (!err) {
            return console.log("DataBase Connected");
        }
        console.log(err);
    }
);

conn.model('Volunteer',VolunteerSchema)
conn.model('BloodBank',BloodBankSchema)
conn.model('Organise',OrganiseSchema)
conn.model('Donation', DonationSchema)

export const VolunteerModel = conn.models.Volunteer
export const BloodBankModel = conn.models.BloodBank
export const OrganiseModel = conn.models.Organise
export const DonationModel = conn.models.Donation
