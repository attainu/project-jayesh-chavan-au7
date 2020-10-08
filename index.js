import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
// import morgan from "morgan";

import "./models";
import homeAssetsRouter from "./routes/home.Routes"
import volunteerAuthRouter from "./routes/volunteerAuth.Routes";
import bloodBankAuthRouter from "./routes/bloodBankAuth.Routes"
import oraginseRouter from './routes/organise.Routes'
import seedsRouter from "./routes/seeds.Routes"
import stripeRouter from "./routes/stripe.Routes"
import emergencyNotificationRoutes from './routes/emergencyNotification.Routes'

const app = express();


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production"){
    app.use(express.static('./client/build'))
}else{
    app.use(morgan("dev"));
    app.use('/seed', seedsRouter)
}

app.use("/", homeAssetsRouter);
app.use("/volunteer", volunteerAuthRouter);
app.use("/bloodbank", bloodBankAuthRouter);
app.use("/organise", oraginseRouter)
app.use("/stripe", stripeRouter)
app.use("/emergency", emergencyNotificationRoutes)

app.get("/", (req, res) => {
    res.status(404).send("Page Not Found");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is Running at port ${PORT}`);
});
