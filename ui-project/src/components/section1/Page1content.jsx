import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1content = (props) => {
  return (
    <div  className='pt-6 pb-20 px-18 flex items-center  h-[90vh]  gap-20'>
    <Leftcontent/>
    <Rightcontent user={props.user}/>
    </div>
  )
}

export default Page1content
