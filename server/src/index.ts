import express,{Request,Response} from 'express'
import mongoose from 'mongoose'
import DeckModel from './models/Deck'

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
    "mongodb://127.0.0.1:27017/flashCard")
    .then(()=>{
        app.listen(5000,()=>{
            console.log("connected")
        })  
        
    }).catch((err)=>{
        console.log(err)
    })  


