
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
import { useState } from 'react';
function App() 
{
  const [amount, setAmount] = useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  
  function handelIncrementClick()
  {
    dispatch(increment());
  }
  function handelDecrementClick()
  {
    dispatch(decrement());
  }
  function handelResetClick()
  {
    dispatch(reset());
  }
  function handelIncAmountClick()
  {
    dispatch(incrementByAmount(amount));
  }
  

  return (
    <div className="container">
      <button onClick={handelIncrementClick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handelDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handelResetClick}>Reset</button>
      <br />
      <input 
        type="Number" 
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=> setAmount(e.target.value)}
      />
      <br />
      <button onClick={handelIncAmountClick}>Increment By Amount</button>
    </div>
  )
}

export default App
