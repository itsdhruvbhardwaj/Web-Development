import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function clickHandler()
  {
    alert("I am clicked");
  }
  function paraHandler()
  {
    alert("Para k upr mouse lekr aaye ho ji..")
  }
  function inputHandler(e)
  {
    console.log("value till now: ", e.target.value);
  }
  function submitHandler(e)
  {
    e.preventDefault();
    alert("Form submitted")

  }


  return (
    <div>
      <form onSubmit={submitHandler}>
          <input type="text" onChange={inputHandler} />
          <button>Submit</button>
      </form>
      
      <p onMouseOver={paraHandler}>This is Paragraph</p>
      <button onClick={clickHandler}>
        Click me 
      </button>
    </div>
  )
}

export default App
