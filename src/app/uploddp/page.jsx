'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function page() {
   const  router = useRouter()
    const [file , setfile] = useState()
    const Submit = async(e)=>{
        e.preventDefault()
        console.log(file)
        const dataa = new FormData();
        dataa.set('file',file)
        
        // data.set("file" , file)
        // console.log(data.get("file"))
        const uplo = await axios.post("/api/users/uplodfile",  dataa)
        router.push('/profile')
       
        
      }
  return (
    <>
    <div>Uplod dp</div>
    <div>
    <form onSubmit={Submit} action='/api/users/uplodfile' method='post' >
        <input type="file"   name='file' onChange={(e)=>{setfile(e.target.files?.[0])
            
        }}/>
        <button type='submit'> Submit</button>
    </form>
   
        </div>
    
    </>
  )
}

export default page