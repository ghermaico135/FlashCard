
import { useEffect, useState } from 'react'
import './App.css'
import { createDeck,getDeck,deleteDeck,type TDeck} from './api/api-deck'


function App() {
  const [title , setTitle] = useState("")
  const [decks , setDecks] = useState<|TDeck[]>([])

  const handleCreateDeck = async (e:React.FormEvent)=>{
      e.preventDefault()
      const deck =await createDeck(title)
      setDecks([...decks,deck])
      setTitle("");
  }

  const handleDelete = async(cardId:String) =>{
       await deleteDeck(cardId)
    // refecthing
    setDecks(decks.filter((deck)=> deck._id !== cardId))
  }

  useEffect(() =>{
   async function fetchDeck(){
    const data= await getDeck()
    console.log("value ",data)
    setDecks(data);
   }
   fetchDeck();
  },[])
 
  console.log("the whole data",decks)
  return (
    <div className='App'>
       <ul className='decks'>
          {decks.map(deck => (
              <li key={deck._id}>  
                <button onClick={() => handleDelete(deck._id)}>X</button>
               </li>
          ))}
      </ul>

      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck-Title</label>
        <input type="text" id="deck-title" value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} />
          <button >Create Deck</button>
      </form>
    </div>
  )
}

export default App
