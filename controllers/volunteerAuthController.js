import bcrypt from 'bcryptjs'
import { VolunteerModel } from '../models'

const findByCredentials = async function (email, password){
    const volunteer = await VolunteerModel.findOne( { email } )
    if(!volunteer){
        console.log('Wrong email');
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, volunteer.password)
    if(!isMatch){
        console.log('Wrong password');
        throw new Error('Unable to login')
    } 
    return volunteer    
}

class VolunteerAuthController {
    async signup(req, res, next) {
        try {
            const volunteer = new VolunteerModel(req.body);
            await volunteer.save();
            res.status(201).send('done');
        } catch (error) {
            if (error.name === "MongoError" && error.code === 11000) {
                res.clearCookie("auth");
                return res.status(200).send("User already exit");
            }
            res.status(500).send(error);
        }
    }

    async login(req, res, next) {
        try {
            const volunteer = await findByCredentials(
                req.body.email,
                req.body.password
            );
            const token = await volunteer.genrateAuthToken();
            // req.header.Authorization = `Bearer ${token}`
            res.cookie("auth", token, { maxage: 21600000 });
            res.cookie("logedInAs", "volunteer", { maxage: 21600000 });
            res.status(200).send(volunteer);
        } catch (error) {
            res.status(200).send("Invalid Credentials !!");
        }
    }

    async logout(req, res, next) {
        try {
            // req.header.Authorization = null
            res.clearCookie("auth");
            res.clearCookie("logedInAs");
            res.status(200).send("done");
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getUser(req, res, next) {
        try {
            res.status(200).send(req.volunteer);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const volunteer = await VolunteerModel.findByIdAndUpdate(
                req.volunteer._id,
                req.body,
                { new: true }
            );
            res.status(200).send(volunteer)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async deleteUser(req,res,next) {
        try {
            await VolunteerModel.findByIdAndDelete(
                req.volunteer._id
            )
            res.clearCookie("auth");
            res.clearCookie("logedInAs");
            res.status(200).send("done");
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async findAll (req,res,next) {
        try {
            const { page, city } = req.query;
            const options = {
                page : parseInt(page,10),
                limit : 10
            }
            const volunteers = await VolunteerModel.paginate({ city },options)
            res.status(200).json(volunteers)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new VolunteerAuthController();
