import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Grid from 'gridfs-stream'

export const conn = mongoose.createConnection(
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

export let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})
