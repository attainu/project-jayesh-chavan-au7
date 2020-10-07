import mongoose from 'mongoose'

const DonationSchema = mongoose.Schema({
    email : {
        type : String,
        trim : true
    },
    receiptObject : {
        type : Object
    }
})

export default DonationSchema