import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  return(
    <div>
      {isLoggedIn && <LogoutBtn></LogoutBtn>}
      {!isLoggedIn && <LoginBtn></LoginBtn>}
    </div>
  )

  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn></LogoutBtn> : <LoginBtn></LoginBtn>}
  //   </div>
  // )

  // if(isLoggedIn)
  // {
  //   return(
  //     <LogoutBtn></LogoutBtn>
  //   )
  // }
  // else
  // {
  //   return(
  //     <LoginBtn></LoginBtn>
  //   )
  // }
}

export default App
