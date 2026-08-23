import React from 'react'

const App = () => {

  function submitHandler(e){
      e.preventDefault() 
      console.log("form submitted")
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
