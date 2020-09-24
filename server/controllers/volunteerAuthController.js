import VolunteerModel from "../models/volunteerModel";

class VolunteerAuthController {
    async signup(req, res, next) {
        try {
            const volunteer = new VolunteerModel(req.body);
            const token = await volunteer.genrateAuthToken();
            // req.header.Authorization = `Bearer ${token}`
            res.cookie("auth", token, { maxage: 21600000 });
            res.cookie("logedInAs", "volunteer", { maxage: 21600000 });
            await volunteer.save();
            res.status(201).send(volunteer);
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
            const volunteer = await VolunteerModel.findByCredentials(
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
}

module.exports = new VolunteerAuthController();
