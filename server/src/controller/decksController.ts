import express,{Request,Response} from 'express'

import Deck from "../models/Deck"

export const getDeck = async (req:Request,res:Response) =>{
    const deck = await Deck.find();
    console.log(deck)
    res.status(200).json(deck);
}

export const postDeck = async (req:Request,res:Response)=>{
    // res.send("Hello from typescript")
    const newDeck = new Deck({title:req.body.title})
    const created = await newDeck.save()
    res.status(201).json({message:"created","created":created})
}

export const deleteDeck = async(req:Request,res:Response) =>{
    const deckId = req.params.id;
        await Deck.findByIdAndDelete(deckId);
    res.status(200).json({message:"Successfully deleted it"})
}


// export const updateDeck = async(req:Request,res:Response) =>{
//     const deckId = req.params.id
//     const deck = await Deck.findById(deckId)

// }