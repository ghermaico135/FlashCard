import express,{Request,Response} from 'express'
import mongoose from 'mongoose'
import DeckModel from './models/Deck'

const app = express()


app.get('/', (req:Request,res:Response)=>{
    res.send("Hello from typescript")
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


