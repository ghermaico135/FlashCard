import express,{Request,Response} from 'express'

import Deck from "../models/Deck"

export const getDeck = async (req:Request,res:Response) =>{
    const deck = await Deck.find();
    console.log(deck)
    res.status(200).json({deck:deck});
}

export const postDeck = async (req:Request,res:Response)=>{
    // res.send("Hello from typescript")
    const newDeck = new Deck({title:req.body.title})
    const created = await newDeck.save()
    res.status(201).json({message:"created","created":created})
}