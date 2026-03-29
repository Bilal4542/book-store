import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './router/book.router.js'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())
const PORT = process.env.PORT || 4001
const URI  = process.env.MONGODBURI

app.get('/',(req,res)=>{
  res.send('Hello we are making bookstore app')
})


mongoose.connect(URI).then(()=>{
  console.log('connected to database')
}).catch((err)=>{
   console.log('database connection failed', error)
})

app.use('/book', bookRoute)

app.listen(PORT, ()=>{
  console.log('Server is running on port ', PORT)
})