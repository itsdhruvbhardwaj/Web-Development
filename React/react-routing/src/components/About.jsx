import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate  = useNavigate();
  function clickHandler()
  {
    navigate("/dashboard")
  }
  return (
    <div>
      AboutPage
      <button onClick={clickHandler}>
        Dashboard
      </button>
    </div>
  )
}

export default About
