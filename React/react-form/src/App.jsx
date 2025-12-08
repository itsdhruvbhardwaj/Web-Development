import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  function onSubmit(data)
  {
    console.log("Submitting the form", data)
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name</label>

        <input 
        type="text" {
          ...register(
            'firstName',
           {
           required: true, 
           minLength:{value:3, message:"Min length should be of 3"},
           maxLength:{value:8, message:"Max length should not more than 8"}
           }
          )
        }
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
    
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name</label>
        <input type="text" {...register('middleName')}/>
      </div>
      <br />
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" {...register('lastName')}/>
      </div>
      <br />
      <input type="Submit" />
    </form>
  )
}

export default App
