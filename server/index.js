import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import "./models";
import volunteerAuthRouter from "./routes/volunteerAuth";
import bloodBankAuthRouter from "./routes/bloodBankAuth"
import uploadFile from './routes/uploadFile'

const app = express();


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/volunteer", volunteerAuthRouter);
app.use("/bloodbank", bloodBankAuthRouter)
app.use("/", uploadFile)

app.get("/", (req, res) => {
    res.status(404).send("Page Not Found");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is Running at port ${PORT}`);
});
