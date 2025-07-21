import { getDeck, postDeck ,deleteDeck} from '../controller/decksController';
import express from 'express'


const route = express.Router();

route.get('/decks',getDeck)

route.post('/decks', postDeck )

route.delete('/decks/:id', deleteDeck )

export default route;