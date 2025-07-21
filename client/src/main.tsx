import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.tsx'
import Deck from './component/deck.tsx';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
