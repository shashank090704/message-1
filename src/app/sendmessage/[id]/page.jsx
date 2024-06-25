'use client'
import React, { UseState } from 'react'
import axios from 'axios'

function page({params}) {
  const [message , setmessage] = UseState({
    data : "",
    user : params.id
  })
  const getmess = async()=>{
  
    const mess = await axios.post("/api/users/message" , message)
    alert('Message send')
    
    
  }
  
  return (
    <div className='h-screen w-screen bg-black flex flex-col items-center justify-center gap-7'>
      <h1 className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-6xl  '>You are messaging to @{params.id}</h1> 
      {/* <input type="text" className='text-black ml-4 h-1/6 w-1/3' value={message} onChange={(e)=>{setmessage(e.target.value)}} /> */}
      <textarea type="text" className='  w-1/3 h-1/4 p-2 text-2xl outline-none resize-none text-white font bg-black flex justify-center items-center border-none border-2 rounded-lg    transition duration-1000   ease-in-out hover:shadow-[-3px_6px_309px_43px_#805ad5] ' value={message.data} onChange={(e)=>{setmessage({...message , data:e.target.value})}} ></textarea>
      <button onClick={getmess} className='bg-black p-3 rounded-full transition duration-1000  ease-in-out  hover:shadow-[-3px_6px_309px_43px_#805ad5] '>Send message</button>
      
       

    </div>
    
  )
}

export default page