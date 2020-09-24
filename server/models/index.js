import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

mongoose.connect( process.env.MONGODB_ATLAS_URL || process.env.MONGODB_LOCAL_URL, {
        useUnifiedTopology : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useNewUrlParser : true
    }, err => {
        if(!err){
            return console.log('DataBase Connected');
        }
        console.log(err);
    })