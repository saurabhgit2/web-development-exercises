import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './Greeting.jsx'
import Sanjeev from './Sanjeev.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div id='firstReact'>
    My First React
    <Greeting/>
    <Sanjeev/>
   </div>
  )
}

export default App
