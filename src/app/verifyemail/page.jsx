'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'


function verifyemail() {
    const [token , settoken] = useState("")
    const [verified , setverified] = useState(false)
    

    const verify= async ()=>{
      try {
        if(!verified){
          console.log(token)
          await axios.post("/api/users/verify", {token})
          setverified(true)
          console.log("verified");
        }
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(()=>{
     const token =  window.location.search.split("=")[1]
     settoken(token)
     
    },[])
   

  return (
    <>
    <h1 className='flex flex-col gap-2  items-center justify-center min-h-screen '>{verified ? "You are verified" : ""}
   
    <button className='bg-red-800' onClick={verify}
    > click here to  Verify email</button>
  <Link href="/login">{verified ? "go to login page" : ""}</Link>
</h1>


    </>
  )
}

export default verifyemail