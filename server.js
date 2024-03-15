import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './router/user.js'

const app = express();

dotenv.config();

const uri = process.env.DB_URI;
const port = process.env.PORT || 3000


app.use(express.static('router'));
app.use(express.json());


const myLogger = (req, res, next) =>{
  console.log(req.url);
  next();
}

app.use(myLogger)


// home
app.get('/' , (req , res) => {
  res.send('welcome to server')
})

// user
app.use('/user', userRouter)


mongoose.connect(uri)
.then(()=>console.log('connect DB'))
.catch((error)=>console.log(error))

app.listen(port,()=>{
  console.log('server is run')
})