import React, {useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste()
  {
      const paste ={
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createAt: new Date().toISOString(),

      }

      if(pasteId)
      {
        //update paste
        dispatch(updateToPastes(paste));
      }
      else
      {
        //add new paste
        dispatch(addToPastes(paste));
      }

      setTitle('')
      setValue('')
      setSearchParams('')

  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
      <input 
        className="p-2 rounded-2xl mt-2 w-2xs pl-4"
        type="text" 
        placeholder= "enter title here"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <button onClick={createPaste}>
        {
          pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button>
    </div>

    <div>
      <textarea 
        className='rounded-2xl mt-4 min-w-[500px] p-4'
        name="" 
        id="" 
        value={value} 
        placeholder='Enter Content Here'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        >
      </textarea>
    </div>
    </div>
  )
}

export default Home
