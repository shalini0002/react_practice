import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { jsx  as _jsx } from 'react/jsx-runtime.js'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_black'
//   },
//   children: 'Click me to visit google'
// }
const anotherUser = "chai aur react"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)
const anotherElement = (
<a href="https://google.com" target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(

reactElement
 
)
