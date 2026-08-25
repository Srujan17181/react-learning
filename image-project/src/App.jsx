import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [data, setData] = useState([])
  
   const [count, setCount] = useState(1)

  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${count}&limit=10`)
    setData(response.data)
  }
  
  useEffect(()=>{
    getData()},[count]
  )

  function addPage(){
    setData([])
    setCount(count+1)  
  }

  function subPage(){
    if(count>1){
      setData([])
      setCount(count-1)  
    }    
  }

  let PrintUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.......</h3>
  
  if(data.length>0){
    PrintUserData=data.map(function(elem,idx){
     return <Card elem={elem} idx={idx}/>
    })}

    
  return (
    <div className='bg-black h-full md:h-screen p-4'>
      <div className=' py-2 mb-10 flex justify-center items-center rounded border-b-2 border-amber-200 '>
        <h1 className='text-white font-bold md:text-3xl text-xl '>Random Images And Author</h1>
      </div>
      
      <div className='flex flex-wrap gap-5 w-full justify-center  md:gap-6 '>
        {PrintUserData}
      </div>
      <div className='flex justify-center items-center gap-5 mt-10 mb-5'>
        <button 
        style={{opacity:count==1?0.5:1}}
        onClick={subPage}
        className='bg-yellow-500 px-5 py-2 rounded text-xs active:scale-95 font-bold' 
        >Prev</button>
        <h3 className='text-white text-sm'>page {count} </h3>
        <button 
        onClick={addPage}
        className='bg-yellow-500 px-5 py-2 rounded text-xs active:scale-95 font-bold'
        >Next</button>
      </div>
    </div>
  )
}

export default App
