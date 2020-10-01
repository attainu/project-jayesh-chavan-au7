import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Grid from 'gridfs-stream'
import VolunteerSchema from './volunteerModel'
import BloodBankSchema from './bloodBankModel'

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

export const VolunteerModel = conn.models.Volunteer
export const BloodBankModel = conn.models.BloodBank

export let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})
