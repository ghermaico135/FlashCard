import { getDeck, postDeck } from '../controller/decksController';
import express from 'express'


const route = express.Router();

route.get('/decks',getDeck)

route.post('/decks', postDeck )

export default route;