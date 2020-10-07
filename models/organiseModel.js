import mongoose from 'mongoose'

const OrganiseSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
    },
    organiser : {
        type : String,
        trim : true
    },
    address : {
        type : String,
        trim : true
    },
    city : {
        type : String,
        trim : true
    },
    state : {
        type : String,
        trim : true
    },
    date : {
        type : String,
        trim : true
    },
    time : {
        type : String,
        trim : true
    },
    poster: {
        fileName : {
            type: String,
            trim: true,
        },
        firebaseUrl : {
            type: String,
            trim: true,
        }
    },
    createdAt : {
        type : Date,
        expires : '5d',
        default : Date.now
    }
})

export default OrganiseSchema