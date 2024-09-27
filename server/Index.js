import express from 'express'
import dotenv, { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// db connection
const connection = async() =>{
  try {
    const conn = await mongoose.connect(process.env.BACKEND_URL)
    console.log("Connected to MongoDB")
    
  } catch (error) {
    console.log(error)
  }  
}
connection();

// middlware

app.get("/", (req, res) => {
  res.send("Hello, server is running...  Have a good day");
})


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});