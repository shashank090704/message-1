'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function SignupPage() {
   const router = useRouter();
    const [user , setuser] = useState({
        email : "",
        password : "",
        username : ""
    })


    const [buttondisable , setbuttondisable] = useState(true)
    const [loding  , setloding] = useState(false)

    const onSignup = async ()=>{
        try {
          if(!buttondisable){
            setloding(true)
         const response = await axios.post("/api/users/signup", user)
         console.log("signup sucess", response.data);
         router.push("/login")
          }
        } catch (error) {
            console.log(error);
            
            toast.error(error.message)
        }
      
    }

    useEffect(()=>{
      if(user.email.length> 0 && user.password.length > 0 && user.username.length >0){
        setbuttondisable(false)
      }else{
        setbuttondisable(true)
      }
    },[user])
  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700'>
      <div className='h-3/4 w-1/3 bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center rounded-3xl flex-col gap-3'>
 <div className='w-2/3'> <h1 className='text-5xl text-white  font-bold'>
  {loding ? "processing": "Signup"}</h1>

  </div>
<div className='w-2/3'> <label className='text-1xl' htmlFor="username">User name</label> </div>
<input type="text" 
id='username'
 className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
value={user.username}
onChange={(e)=> setuser({...user , username: e.target.value})}
placeholder='Entre username'/>
<div className='w-2/3'><label className='text-1xl' htmlFor="email">Entre email</label> </div>
<input type="text"
id='email'
value={user.email}
onChange={(e)=>setuser({...user , email: e.target.value})}

 className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
placeholder='Enter email'
 />
 <div className='w-2/3'><label className='text-1xl ' htmlFor="password">Enter Password</label> </div>
 <input  className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 ' type="password"  placeholder='Enter Password' value={user.password} 
 onChange={ (e) => setuser({...user , password:e.target.value})} />
 <button  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  text-white font-medium flex items-center justify-center p-3 rounded-full' onClick={onSignup}
  >
  {buttondisable ? "plese fill the form" : "signup"}
 </button>
 <Link className='  text-white font-medium flex items-center justify-center p-3 rounded-full' href='/login'>Already have account</Link>
 </div>
</div>
</>
  )
}

export default SignupPage