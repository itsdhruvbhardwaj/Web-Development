import { useEffect, useRef, useState } from 'react'
import './App.css'

//Funtion A: to hold the value of a variable
/*
function App() {
  const [count, setCount] = useState(0);
  //let val = 0; //on every change in ui it sets back to 0 instead of increasing
  let val = useRef(0); //using useRef-hook value do not set back to 0, it holds the value;

  function handleIncrement()
  {
    //val=val+1;
    val.current = val.current+1; //using useRef 
    console.log("Value of val: ", val.current);
    setCount(count+1);
  }
  //runs on every render
  useEffect(()=>
  {
    console.log("Runs on every render")
  })

  return (
    <div>
      <button 
      onClick={handleIncrement}>
        Increment
      </button>

      <br />
      <br />

      <div>
        Count: {count}
      </div>


    </div>
  )
}
*/

//Funtion B: to change the state of an object, changing color of a button using another button
/*
function App() {
  const [count, setCount] = useState(0);
  
  let btnRef = useRef(); //1. create reference

  function handleIncrement()
  {
    setCount(count+1);
  }
  
  function handleChangeColor() //3. accecc reference
  {
    btnRef.current.style.backgroundColor = "red";  //4. change reference
  }

  return (
    <div>
      <button 
      ref={btnRef} //2. link reference
      onClick={handleIncrement}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={handleChangeColor}> 
        Change Color
      </button>

      <div>
        Count: {count}
      </div>


    </div>
  )
}
*/

//Stop Watch using UseRef:
function App() {

  const [time, setTime] = useState(0)

  let timerRef = useRef(null);

  function startTimer()
  {
    timerRef.current = setInterval(() => {
      setTime(time=>time+1);
    }, 1000);
  }
  function stopTimer()
  {
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTimer()
  {
    stopTimer()
    setTime(0);
  }
  

  return (
    <div>
      <h1>StopWatch: {time} Sec</h1>

      <button onClick={startTimer}>Start Timer</button>
      <br />
      <br />

      <button onClick={stopTimer}>Stop Timer</button>
      <br />
      <br />

      <button onClick={resetTimer}>Reset Timer</button>

      <br />
      
    </div>
  )
}

export default App
