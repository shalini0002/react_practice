
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
 const changeColor = () =>{
 // setColor = 
 }

  return (
    <>
     <div className="w-full h-screen duration-200"
      style={{backgroundColor: color} }>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl px-3 py-2 bg-white">
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "red"}}>Test</button>
            <button onClick={() => setColor("orange")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "orange"}}>Test</button>
            <button onClick={() => setColor("yellow")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "yellow"}}>Test</button>
            <button onClick={() => setColor("green")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "green"}}>Test</button>
            <button onClick={() => setColor("blue")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "blue"}}>Test</button>
            <button onClick={() => setColor("purple")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "purple"}}>Test</button>
            <button onClick={() => setColor("pink")}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background : "pink"}}>Test</button>


          </div>
        </div>
     </div>
    </>
  )
}

export default App
