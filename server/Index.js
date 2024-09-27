import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { getlinks, getSlugRedic, postLink } from './controllers/Link.js'
import { postlogin, postSingup } from './controllers/user.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// db connection
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.BACKEND_URL)
    console.log("Connected to MongoDB")

  } catch (error) {
    console.log(error)
  }
}
connection();

// middlware

//health
app.get("/health", (req, res) => res.send("Hello, server is Healthy"))
app.get("/", (req, res) => res.send("Hello, server is running...  Have a good day"))

//links
app.post('/add-link', postLink)
app.get('/get-short-link', getlinks)
app.get('/:slug', getSlugRedic)


//user 
app.post('/user', postSingup)
app.post('/user-login', postlogin)


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});