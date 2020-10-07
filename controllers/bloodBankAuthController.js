import bcrypt from 'bcryptjs'
import { BloodBankModel } from '../models'

const findByCredentials = async function (email, password){
    const bloodBank = await BloodBankModel.findOne( { email } )
    if(!bloodBank){
        console.log('Wrong email');
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, bloodBank.password)
    if(!isMatch){
        console.log('Wrong password');
        throw new Error('Unable to login')
    } 
    return bloodBank    
}

class BloodBankAuthController {
    async signup(req, res, next) {
        try {
            const bloodBank = new BloodBankModel(req.body);
            await bloodBank.save();
            res.status(201).send('done');
        } catch (error) {
            if (error.name === "MongoError" && error.code === 11000) {
                res.clearCookie("auth");
                return res.status(200).send("User already exit");
            }
            console.log(error);
            res.status(500).send(error);
        }
    }

    async login(req, res, next) {
        try {
            const bloodBank = await findByCredentials(
                req.body.email,
                req.body.password
            );
            const token = await bloodBank.genrateAuthToken();
            // req.header.Authorization = `Bearer ${token}`
            res.cookie("auth", token, { maxage: 21600000 });
            res.cookie("logedInAs", "bloodBank", { maxage: 21600000 });
            res.status(200).send(bloodBank);
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

    async getBank(req, res, next) {
        try {
            res.status(200).send(req.bloodBank);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async updateBank(req, res, next) {
        try {
            const bloodBank = await BloodBankModel.findByIdAndUpdate(
                req.bloodBank._id,
                req.body,
                { new: true }
            );
            res.status(200).send(bloodBank)
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    async deleteBank(req,res,next) {
        try {
            await BloodBankModel.findByIdAndDelete(
                req.bloodBank._id
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
            const bloodBanks = await BloodBankModel.paginate({ city },options)
            res.status(200).json(bloodBanks)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new BloodBankAuthController();
