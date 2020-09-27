import express from 'express'
import multer from "multer";
import VolunteerModel from '../models/volunteerModel'
import isAuthVolunteer from '../utils/isAuthVolunteer'
import { gfs } from "../models";
import { storage } from '../config/bucketStorage'

const Router = express.Router()
const upload = multer({ storage });

Router.post('/profile-upload', isAuthVolunteer, upload.single("file"), async (req, res) => {
    try {
        const volunteer = await VolunteerModel.findByIdAndUpdate(
            req.volunteer._id,
            { profile_photo : req.file.filename },
            { new: true }
        );
        res.status(200).send(volunteer)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

Router.get("/image/:filename", (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: "No file exists",
            });
        }
        if (
            file.contentType === "image/jpeg" ||
            file.contentType === "image/png"
        ) {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: "Not an image",
            });
        }
    });
});

module.exports = Router