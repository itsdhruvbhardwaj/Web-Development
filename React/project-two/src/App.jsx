import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCards from './components/usercards'
import img from "./assets/img.jpg"
import dip from "./assets/dip.png"
import garv from "./assets/garv.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCards name="Dhruv" desc="Descrition1" image={img}/>
      <UserCards name="Dipanshu" desc="Descrition2" image={dip}/>
      <UserCards name="Garv" desc="Descrition3" image={garv}/>
    </div>
  )
}

export default App
