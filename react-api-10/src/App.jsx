import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [getdata, setgetData] = useState([])

  const getData=async ()=>{
    const response=await axios.get('https://picsum.photos/v2/list')
    setgetData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
        {getdata.map((elem,idx)=> <h3 key={idx}>{elem.author},{idx+1}</h3>)}
      </div>
    </div>
  )
}

export default App
