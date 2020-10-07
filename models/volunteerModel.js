import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoosePeginate from 'mongoose-paginate-v2'

const VolunteerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    date_of_birth: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    mob_no: {
        type: String,
        trim: true,
    },
    blood_group: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    pincode: {
        type: String,
        trim: true,
    },
    profile_photo: {
        fileName : {
            type: String,
            trim: true,
        },
        firebaseUrl : {
            type: String,
            trim: true,
        }
    },
    status: {
        type : Boolean
    }
});

VolunteerSchema.methods.genrateAuthToken = function (){
    const volunteer = this
    const token = jwt.sign( {_id : volunteer._id.toString()}, process.env.SECRET_KEY, { expiresIn : '6h'})
    return token
}

VolunteerSchema.pre('save', async function (next) {
    const volunteer = this
    if (volunteer.isModified('password')) {
        volunteer.password = await bcrypt.hash(volunteer.password, 8)
    }
    next()
})

VolunteerSchema.plugin(mongoosePeginate)

module.exports = VolunteerSchema