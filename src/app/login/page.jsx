'use client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
// import style from '@/Stylesheet/login.module.css'
function Loginpage() {
  const router = useRouter()
 const [user , setuser] = React.useState({
    username : "",
    password : ""
  }
  )
  const [ buttondisable , setbuttondosable] = React.useState(true)
  const [loding , setloding] = React.useState(false)
  const login = async ()=>{
    try {
      if(!buttondisable){
      setloding(true)
      
     const response =  await axios.post("/api/users/login" , user)
     
     router.push("/profile")
      }
    } catch (error) {
      console.log("not send")
    }
  
  }
  useEffect(()=>{
    if(user.username.length > 0 && user.password.length > 0){
      setbuttondosable(false);
    }else{
      setbuttondosable(true)
    }
  },[user])
  return (
  <dir className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700'>
       
   <div className='h-3/4 w-1/3 bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center rounded-3xl flex-col gap-4'>
   <div className='w-2/3 h-1/6'> <h1 className='text-5xl  font-bold'>{loding ?"processing " : "Login page"} </h1> </div>
   <div className='w-2/3'> <label className='text-1xl' htmlFor="username">Ener Username</label> </div>
    <input placeholder='Enter your user name' type="text" 
    value={user.username}
    className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
    onChange={(e)=>setuser({...user, username : e.target.value})}/>
    <div className='w-2/3'><label className='text-1xl' htmlFor="password">Password</label> </div>
    <input placeholder='Entre your password' type="password" 
    className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
    value={user.password}
    onChange={(e)=>setuser({...user , password : e.target.value})}/>
    <button onClick={login}  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  h-10 w-20 text-white font-medium flex items-center justify-center pr-2 rounded-full'>Login</button>
    <Link href="/signup"className=' h-10 w-60 text-white font-medium flex items-center justify-center   pr-2 rounded-full'>Register your account</Link>
    </div>
    </dir>
    
   
  )
}

export default Loginpage