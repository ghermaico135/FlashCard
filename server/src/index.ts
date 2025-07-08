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

app.post('/decks', async (req:Request,res:Response)=>{
    // res.send("Hello from typescript")
    const newDeck = new DeckModel({title:req.body.title})
    const created = await newDeck.save()
    res.status(201).json({message:"created","created":created})
})


mongoose.connect(
  process.env.MONGODB_URI!)
    .then(()=>{
        app.listen(5000,()=>{
            console.log("connected")
        })  
        
    }).catch((err)=>{
        console.log(err)
    })  


