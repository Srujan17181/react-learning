import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div key={props.idx} className='w-55 h-45 rounded mb-5'>
        <img 
        className='w-full h-full object-cover'
        src={props.elem.download_url} alt="" />
        <h3 className='text-white font-bold text-xs mt-2 text-center'>{props.elem.author}</h3>
        </div>
    </div>
  )
}


export default Card
