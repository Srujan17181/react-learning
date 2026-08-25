import React from 'react'

const App = () => {
  const user={user:'srujan',age:18};
  localStorage.setItem('user',JSON.stringify(user))

  const getuser=localStorage.getItem('user')
  JSON.parse(getuser)
  console.log(getuser)
  return (
    <div>
      App
    </div>
  )
}

export default App
