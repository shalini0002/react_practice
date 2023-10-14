import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let myObject = {
username: "hitesh",
age: 21
}
let newArray = [1,2,3]

  return (
    <>
    <h1 className='text-red-500 bg-green-500 p-4 rounded-2xl'>Tailwind Check</h1>
    <Card username="chai aur code" btnText="click me"/>
    <Card username= "Shalini" btnText="visit me"/>
     
    </>
  )
}

export default App
