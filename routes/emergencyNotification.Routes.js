import express from "express";
import emergencyNotificationController from '../controllers/emergencyNotificationController'

const Router = express.Router();

Router.post("/notification", emergencyNotificationController.notification);

module.exports = Router;
