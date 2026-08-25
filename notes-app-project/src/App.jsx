import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function submitHandler(e){
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  function deleteBtn(idx){
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className=' h-screen  lg:flex'>
      <form 
      onSubmit={submitHandler}
      className='flex flex-col lg:w-1/2 gap-2 text-black p-10  items-start'>
      <h1 className='font-bold text-4xl'>Add notes</h1>
        <input 
        type="text" 
        placeholder='title' 
        className='rounded py-2 px-5 border-2 w-full'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <textarea 
        name="details" 
        placeholder='details' 
        id="book" 
        className='w-full h-32 flex flex-row items-start outline-none px-4 py-2 border-2'
        value={details}
        onChange={(e)=>{setDetails(e.target.value)}}
        >
        </textarea>
        <button 
        className='bg-black text-xl text-white rounded px-5 py-2 w-full outline-none active:bg-gray-500'>
          Add Notes
          </button>
      </form>
        <div className=' p-10 bg-amber-900 lg:w-1/2'>
        <h1 className='font-bold text-4xl'>Recent notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-[90%] '>
          {task.map((elem,idx)=><div key={idx} className="h-52 w-42 flex flex-col justify-between items-start px-4 bg-cover rounded-2xl bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] ">
            <div className='flex flex-col justify-between'>
            <h3 className='text-black leading-tight text-xl font-bold py-3'>{elem.title}</h3>
            <p className='mt-1 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button
            onClick={()=>deleteBtn(idx)}
             className='font-bold bg-red-400 rounded px-5 mb-5 active:bg-red-200'>Delete</button>
          </div>)}
          </div>
        </div>
      </div>
  )
}

export default App
