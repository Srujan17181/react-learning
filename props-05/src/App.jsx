import React from 'react'
import Card from './components/Card'

const App = () => {
  const users=[{name:"Srujan",
    desc:`I am Srujan Junior Developer`,
    img:'https://images.unsplash.com/photo-1783805999143-8636bc08abef?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {name:"Book",
    desc:`I am Book Senior Developer`,
    img:'https://images.unsplash.com/photo-1780174604929-42437e465a44?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }]
  
  return (
    <div className='parent'>
      {users.map((user)=> <Card name={user.name} desc={user.desc} img={user.img}/>)}
    </div>
  )
}

export default App
