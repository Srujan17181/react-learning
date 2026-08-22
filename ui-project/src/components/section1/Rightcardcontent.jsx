import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='bg-transparent h-full w-full absolute top-0 bottom-0 p-5 flex flex-col justify-between'>
            <h1 className='bg-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold'>{props.id}</h1>
            <div>
                <p className='text-xl leading-normal text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, explicabo.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium text-xl rounded-full px-7 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium text-xl rounded-full px-3 py-2'>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Rightcardcontent
