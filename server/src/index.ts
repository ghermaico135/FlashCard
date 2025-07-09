import express,{Request,Response} from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import route from './routes/decksRoute';

config();
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all (or specify a domain)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/api' , route);


mongoose.connect(
  process.env.MONGODB_URI!)
    .then(()=>{
        app.listen(process.env.PORT || 5000,()=>{
            console.log("connected")
        })  
        
    }).catch((err)=>{
        console.log(err)
    })  


