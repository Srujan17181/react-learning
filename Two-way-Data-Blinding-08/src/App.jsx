import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState("")
  

  function submitHandler(e){
    e.preventDefault()
    console.log("Form Submitted By",task)
    setTask("")
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name'  onChange={(e)=>{setTask(e.target.value)}} value={task}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
