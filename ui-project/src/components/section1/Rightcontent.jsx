import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
    const newuser=props.user

  return (
    <div id="right" className=' h-full w-2/3 p-4 flex gap-10 flex-nowrap overflow-x-auto '>
      {newuser.map((u)=> <Rightcard id={u.id} color={u.color} tag={u.tag}/>)}
      
    </div>
  )
}

export default Rightcontent
