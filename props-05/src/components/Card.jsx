import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img}alt="" />
         <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
