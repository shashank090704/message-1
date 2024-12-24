// 'use client'
// import React from 'react'
// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import Link from 'next/link'
// // import style from '@/Stylesheet/login.module.css'
// function Loginpage() {
//   const router = useRouter()
//  const [user , setuser] = React.useState({
//     username : "",
//     password : ""
//   }
//   )
//   const [ buttondisable , setbuttondosable] = React.useState(true)
//   const [loding , setloding] = React.useState(false)
//   const login = async ()=>{
//     try {
//       if(!buttondisable){
//       setloding(true)
      
//      const response =  await axios.post("/api/users/login" , user)
     
//      router.push("/profile")
//       }
//     } catch (error) {
//       console.log("not send")
//     }
  
//   }
//   useEffect(()=>{
//     if(user.username.length > 0 && user.password.length > 0){
//       setbuttondosable(false);
//     }else{
//       setbuttondosable(true)
//     }
//   },[user])
//   return (
//   <dir className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700'>
       
//    <div className='h-3/4 w-1/3 bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center rounded-3xl flex-col gap-4'>
//    <div className='w-2/3 h-1/6'> <h1 className='text-5xl  font-bold'>{loding ?"processing " : "Login page"} </h1> </div>
//    <div className='w-2/3'> <label className='text-1xl' htmlFor="username">Ener Username</label> </div>
//     <input placeholder='Enter your user name' type="text" 
//     value={user.username}
//     className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
//     onChange={(e)=>setuser({...user, username : e.target.value})}/>
//     <div className='w-2/3'><label className='text-1xl' htmlFor="password">Password</label> </div>
//     <input placeholder='Entre your password' type="password" 
//     className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
//     value={user.password}
//     onChange={(e)=>setuser({...user , password : e.target.value})}/>
//     <button onClick={login}  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  h-10 w-20 text-white font-medium flex items-center justify-center pr-2 rounded-full'>Login</button>
//     <Link href="/signup"className=' h-10 w-60 text-white font-medium flex items-center justify-center   pr-2 rounded-full'>Register your account</Link>
//     </div>
//     </dir>
    
   
//   )
// }

// export default Loginpage

// 'use client'
// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import Link from 'next/link'

// function Loginpage() {
//   const router = useRouter()
//   const [user, setUser] = useState({
//     username: "",
//     password: ""
//   })
//   const [buttonDisable, setButtonDisable] = useState(true)
//   const [loading, setLoading] = useState(false)

//   const login = async () => {
//     try {
//       if (!buttonDisable) {
//         setLoading(true)
//         await axios.post("/api/users/login", user)
//         router.push("/profile")
//       }
//     } catch (error) {
//       console.log("Login failed")
//     }
//   }

//   useEffect(() => {
//     setButtonDisable(!(user.username.length > 0 && user.password.length > 0))
//   }, [user])

//   return (
//     <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 p-7'>
//       <div className='h-3/4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-center items-center rounded-3xl gap-4 p-6'>
//         <h1 className='text-3xl sm:text-5xl font-bold text-center'>
//           {loading ? "Processing..." : "Login Page"}
//         </h1>
//         <div className='w-full'>
//           <label className='text-lg' htmlFor="username">Enter Username</label>
//         </div>
//         <input 
//           placeholder='Enter your username' 
//           type="text" 
//           value={user.username}
//           className='text-white bg-gradient-to-r from-slate-800 to-slate-700 text-lg p-2 rounded-full w-full'
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//         />
//         <div className='w-full'>
//           <label className='text-lg' htmlFor="password">Password</label>
//         </div>
//         <input 
//           placeholder='Enter your password' 
//           type="password" 
//           className='text-white bg-gradient-to-r from-slate-800 to-slate-700 text-lg p-2 rounded-full w-full'
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//         <button 
//           onClick={login} 
//           className={`bg-gradient-to-r from-fuchsia-600 to-purple-600 h-10 w-24 text-white font-medium flex items-center justify-center rounded-full ${buttonDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
//           disabled={buttonDisable}
//         >
//           Login
//         </button>
//         <Link href="/signup" className='h-10 w-60 text-white font-medium flex items-center justify-center '>
//           Register your account
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Loginpage
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

function Loginpage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [buttonDisable, setButtonDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      if (!buttonDisable) {
        setLoading(true);
        await axios.post("/api/users/login", user);
        router.push("/profile");
      }
    } catch (error) {
      console.log("Login failed");
    }
  };

  useEffect(() => {
    setButtonDisable(!(user.username.length > 0 && user.password.length > 0));
  }, [user]);

  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 p-7'>
      <div className='h-auto sm:w-3/4 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-slate-800 to-slate-700 flex flex-col justify-center items-center rounded-3xl shadow-lg gap-6 p-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center text-white'>
          {loading ? "Processing..." : "Login to Your Account"}
        </h1>
        
        <div className='w-full'>
          <label className='text-lg text-white' htmlFor="username">Username</label>
        </div>
        <input
          placeholder='Enter your username'
          type="text"
          value={user.username}
          className='text-white bg-transparent border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-lg p-3 rounded-full w-full transition-all duration-300'
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <div className='w-full mt-4'>
          <label className='text-lg text-white' htmlFor="password">Password</label>
        </div>
        <input
          placeholder='Enter your password'
          type="password"
          className='text-white bg-transparent border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-lg p-3 rounded-full w-full transition-all duration-300'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={login}
          className={`w-full h-12 mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium rounded-full transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-fuchsia-500 ${buttonDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          disabled={buttonDisable}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <div className="mt-4 text-center">
          <Link href="/signup" className="text-white text-lg hover:underline transition-all duration-300">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
