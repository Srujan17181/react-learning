import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState("")

  function getTask(e){
    setTask(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder='enter your name' onChange={getTask} value={task} />
    </div>
  )
}

export default App
