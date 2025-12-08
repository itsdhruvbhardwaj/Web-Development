import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA'

//step1: create context
const UserContext = createContext()
//step2: wrap all the child inside provider
//step3: pass value
//step4: consumer k andr ja kr consume kr lo

function App() {

  const [user, setUser] = useState({name: "Dhruv"});


  return (
    //provider k andr components ko wrap kr dia
    <UserContext.Provider value ={user}>
      <ChildA></ChildA>
    </UserContext.Provider>
  
  )
}

export default App
export {UserContext}
