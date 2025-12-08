import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <p>{props.title} k andr ki value: {props.name}</p>
    </div>
  )
}

export default Card
