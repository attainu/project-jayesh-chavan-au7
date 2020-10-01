require('dotenv').config()
import jwt from 'jsonwebtoken'
import { BloodBankModel } from '../models'

const isAuthBloodBank = async (req, res, next) => {
    try {
        // let token = req.header.Authorization.replace('Bearer', "").trim()
        let token = req.cookies.auth
        if(!token){
            return res.status(200).send('please Authenticate')
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        let bloodBank = await BloodBankModel.findById( { _id : decoded._id} )
        if(!bloodBank){
            return res.status(200).send('please Authenticate')
        }
        req.token = token
        bloodBank.password = undefined
        req.bloodBank = bloodBank
        next()
    } catch (error) {
        console.log('cookie expire',error);
        return res.status(401).redirect('/')
    }
}

module.exports = isAuthBloodBank
