import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  function clickHandler()
  {
    setCount(count+1);
  }

  return (
    <div>
      <Button clickHandler={clickHandler} text="Click me">
        <p>{count}</p>
      </Button>

      {/* <Card name="Dhruv Sharma">
        <h1>This is heading</h1>
        <p>This is paragraph</p>
        <p>This is paragraph2</p>
      </Card> */}
    </div>
  )
}

export default App
