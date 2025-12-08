import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'


const ChildC = () => {

    //4: jo value 3 mai pass ki thi use yha consume kr lo
    const {theme, setTheme} =  useContext(ThemeContext)
    function toggleTheme()
    {
        if(theme=='light')
        {
            setTheme('dark')
        }
        else
        {
            setTheme('light')
        }
    }

  return (
    <div>
        <button onClick={toggleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildC
