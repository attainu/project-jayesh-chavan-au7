import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoosePeginate from 'mongoose-paginate-v2'

const BloodBankSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true
    },
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
    first_line_add: {
        type: String,
        trim: true
    },
    second_line_add: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    mob_no: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true
    },
    availability: {
        type: Object
    },
    status:{
        type: Boolean
    }
})

BloodBankSchema.methods.genrateAuthToken = function (){
    const bloodBank = this
    const token = jwt.sign( {_id : bloodBank._id.toString()}, process.env.SECRET_KEY, { expiresIn : '6h'})
    return token
}

BloodBankSchema.pre('save', async function (next) {
    const bloodBank = this
    if (bloodBank.isModified('password')) {
        bloodBank.password = await bcrypt.hash(bloodBank.password, 8)
    }
    next()
})

BloodBankSchema.plugin(mongoosePeginate)

module.exports = BloodBankSchema