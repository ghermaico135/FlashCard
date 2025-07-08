import express,{Request,Response} from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'

import DeckModel from './models/Deck'

config();
const app = express()

app.use(express.json())

// app.get('/decks',async (req:Request,res:Response) =>{
//     const deck = new DeckModel()
// })

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all (or specify a domain)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/decks', async (req:Request,res:Response)=>{
    // res.send("Hello from typescript")
    const newDeck = new DeckModel({title:req.body.title})
    const created = await newDeck.save()
    res.status(201).json({message:"created","created":created})
})


mongoose.connect(
  process.env.MONGODB_URI!)
    .then(()=>{
        app.listen(process.env.PORT || 5000,()=>{
            console.log("connected")
        })  
        
    }).catch((err)=>{
        console.log(err)
    })  


