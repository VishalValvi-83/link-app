import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { deleteLink, getlinks, getSlugRedic, postLink, updateLink } from './controllers/Link.js'
import { deleteUser, postGoogleSignin, postlogin, postSingup, updateUser } from './controllers/user.js'
import { createContact } from './controllers/contact.js'
import colors from 'colors'
import GReCap from './controllers/GReCap.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// db connection
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL)
    console.log("Connected to MongoDB".bgGreen)

  } catch (error) {
    console.log(`${error}`.bgRed)
  }
}
connection();

// middlware

//health
app.get("/health", (req, res) => res.send("Hello, server is Healthy"))
app.get("/", (req, res) => {
  res.send(`<body style='background-color:black; text-align:center;'>
            <p style="margin:0 auto; margin-top: 150px; width: 400px; border-radius:50%; color: black; font-size: 30px; background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
">
                <span style='font-size:60px;'>HELLO!</span> <br/>
                <span style='font-size:30px;'><sup>From</sup> </span>
                <span style='font-size:50px;'>Server</span>
            </p>
        </body>`)
})

//links
app.post('/add-link', postLink)
app.get('/get-short-link', getlinks)
app.get('/:slug', getSlugRedic)
app.delete('/delete-link/:id', deleteLink)
app.put('/update-link/:id', updateLink)


//user 
app.post('/user', postSingup)
app.post('/user-login', postlogin)

app.post('/google-signin', postGoogleSignin)
app.put('/update-profile/:id', updateUser)
app.delete('/delete-account/:id', deleteUser);
app.post("/contact", createContact);


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`.bgCyan);
});