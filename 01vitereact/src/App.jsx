import { useState } from 'react'

import './App.css'
import Chai from './chai'
function App() {
  const [count, setCount] = useState(0)
  const username = "chai aur react |"
  return (
    <>
    <Chai/>
     <h1>Shalini it's your turn {username}</h1>
     <p>test para</p>
    </>
  )
}

export default App
