import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users=[
    {id:"1",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quibusdam.",
      imgurl:"https://plus.unsplash.com/premium_photo-1661769333623-45edf19642c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:"Satisfied",
      color:"blue"
    },
    {id:"2",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quibusdam.",
      imgurl:"https://plus.unsplash.com/premium_photo-1661962617427-3718a460f74f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:"Unserved",
      color:"pink"
    },
    {id:"3",
      content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, quibusdam.",
      imgurl:"https://plus.unsplash.com/premium_photo-1661581966279-50a7708c00d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag:"Average",
      color:"green"
    }
  ]
  return (
    <div>
      <Section1 user={users}/>
      <Section2 />
    </div>
  )
}

export default App
