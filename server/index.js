import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'

import './models'
import volunteerAuthRouter from './routes/volunteerAuth'

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(cookieParser())

app.use('/volunteer', volunteerAuthRouter)

app.get('/', (req,res) => {
    res.status(404).send('Page Not Found')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is Running at port ${PORT}`);
})