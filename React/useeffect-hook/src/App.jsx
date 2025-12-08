import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  //state-variables
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1); 
/*
  useEffect(() => {
    //side effect logic
    first
  
    return () => {
      //  cleanup function
      second
    }
  }, [third])  //comma-seperated dep. list
  */
  
  //variation 1: runs on every render
  /*
  useEffect(() => {
   alert("I will run on every render")
  })
   */

  //variation 2: runs only on first render
  /*
  useEffect(() => {
   alert("I will run on only first render")
  },[])
  */

  //variation 3: runs every time when comma -seperated dependency updates
  /*
  useEffect(() => {
    alert("I will run on every count update")
  }, [count])
  */

  //variation 4: runs every time when comma -seperated dependency updates
  /*
  useEffect(() => {
    alert("I will run on every count/total update")
  }, [count, total])
  */

  //variation 5: clean-up function
  /*
  useEffect(() => {
    alert("Count updated")
    
    return()=>{
      alert("count is unmounted from UI")
    }
  }, [count])
  */
  
  
  
  function clickHandler()
  {
    setCount(count+1);
  }
  function clickHandlerU()
  { 
    setTotal(total+1);
  }
  return (
    <div>
      <button onClick={clickHandler}>Update Count</button>
      <br />
      count is: {count}
      <br />
      
      <button onClick={clickHandlerU}>Update Total</button>
      <br />
      total is: {total}
    </div>
  )
}

export default App
