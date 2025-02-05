import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarRating from "./StarRating.jsx";

//We could specify the totalStars here
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating style={{backgroundColor: 'lightblue'}}/>
  </StrictMode>,
)
