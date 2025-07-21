const API_URL = 'http://localhost:5000/api/decks'
export type TDeck ={
  _id :string;
  title:string;
}


export const createDeck = async (title:String) =>{
      const response = await fetch(`${API_URL}`,{
        method:'POST',
        body:JSON.stringify({
          title
        }),
        headers:{'Content-Type':'application/json'}
      })

      // optimazation
   return await response.json()
    
  }

export const getDeck = async() =>{
     const response =  await fetch(`${API_URL}`);
    return await response.json()
}
  
export const deleteDeck = async(cardId:String) =>{
      await fetch(`${API_URL}/${cardId}`,{
      method:'DELETE',
    })
}