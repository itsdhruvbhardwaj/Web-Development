import React from 'react'
import img from '../assets/img.jpg'
import "./UserCards.css"

const UserCards = (props) => {
  return (
    <div className="user-container">
        <p id='user-name'>{props.name}</p>
        <img id='user-image' src={props.image} alt={props.name} />
        <p id='user-desc'>{props.desc} {props.name}</p>
    </div>
  )
}

export default UserCards
