require('dotenv').config()
import jwt from 'jsonwebtoken'
import { VolunteerModel } from '../models'
const isAuthVolunteer = async (req, res, next) => {
    try {
        // let token = req.header.Authorization.replace('Bearer', "").trim()
        let token = req.cookies.auth
        if(!token){
            return res.status(200).send('please Authenticate')
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        let volunteer = await VolunteerModel.findById( { _id : decoded._id} )
        if(!volunteer){
            return res.status(200).send('please Authenticate')
        }
        req.token = token
        volunteer.password = undefined
        req.volunteer = volunteer
        next()
    } catch (error) {
        console.log('cookie expire',error);
        return res.status(401).redirect('/')
    }
}

module.exports = isAuthVolunteer
