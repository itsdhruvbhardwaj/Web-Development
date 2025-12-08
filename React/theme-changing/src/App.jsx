import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA'

//1: theme context create kro
const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')

  return (
    //2: theme ka provider create kro, ThemeContext.Provider
    //3: jo value send krna chate ho uss value ko pass kr do, value ={{theme, setTheme}}
    <div>
      <ThemeContext.Provider value ={{theme, setTheme}}> 
        <div id='container' style={{backgroundColor:theme == 'light'?'aqua':'black'}}>
          <ChildA></ChildA>
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext};