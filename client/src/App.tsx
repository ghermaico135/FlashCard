
import { useEffect, useState } from 'react'
import './App.css'

type Deck ={
  _id :string;
  title:string;
}

function App() {
  const [title , setTitle] = useState("")
  const [decks , setDecks] = useState<Deck[]>([])

  const handleCreateDeck = async (e:React.FormEvent)=>{
      e.preventDefault()
      await fetch("http://localhost:5000/api/decks",{
        method:'POST',
        body:JSON.stringify({
          title
        }),
        headers:{'Content-Type':'application/json'}
      })
      setTitle("");
  }

  useEffect(() =>{
   async function fetchDeck(){
    const response =  await fetch("http://localhost:5000/api/decks");
    const data= await response.json()
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
              <li key={deck._id}> {deck.title} </li>
          ))}
      </ul>

      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck-Title</label>
        <input type="text" id="deck-title" value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} />
          <button className="btn">Create Deck</button>
      </form>
    </div>
  )
}

export default App
