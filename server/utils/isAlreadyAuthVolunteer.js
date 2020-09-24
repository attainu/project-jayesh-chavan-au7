require('dotenv').config()
import jwt from 'jsonwebtoken'
import VolunteerModel from '../models/volunteerModel'

const isAlreadyAuthVolunteer = async (req, res, next) => {
    try {
        // if(!req.header.Authorization){
        //     return next()
        // }
        // let token = req.header.Authorization.replace('Bearer', "").trim()
        if(!req.cookies.auth){
            return next()
        }
        let token = req.cookies.auth
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const volunteer = await VolunteerModel.findById( { _id : decoded._id} )
        if(!volunteer){
            return next()
        }
        res.status(200).redirect('/dashboard')
    } catch (error) {
        console.log(error);
        return res.status(401).redirect('/')
    }
}

module.exports = isAlreadyAuthVolunteer