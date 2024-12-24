// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast} from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// function SignupPage() {
//    const router = useRouter();
//     const [user , setuser] = useState({
//         email : "",
//         password : "",
//         username : ""
//     })


//     const [buttondisable , setbuttondisable] = useState(true)
//     const [loding  , setloding] = useState(false)

//     const onSignup = async ()=>{
//         try {
//           if(!buttondisable){
//             setloding(true)
//          const response = await axios.post("/api/users/signup", user)
//          console.log("signup sucess", response.data);
//          router.push("/login")
//           }
//         } catch (error) {
//             console.log(error);
            
//             toast.error(error.message)
//         }
      
//     }

//     useEffect(()=>{
//       if(user.email.length> 0 && user.password.length > 0 && user.username.length >0){
//         setbuttondisable(false)
//       }else{
//         setbuttondisable(true)
//       }
//     },[user])
//   return (
//     <>
//     <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700'>
//       <div className='h-3/4 w-1/3 bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center rounded-3xl flex-col gap-3'>
//  <div className='w-2/3'> <h1 className='text-5xl text-white  font-bold'>
//   {loding ? "processing": "Signup"}</h1>

//   </div>
// <div className='w-2/3'> <label className='text-1xl' htmlFor="username">User name</label> </div>
// <input type="text" 
// id='username'
//  className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
// value={user.username}
// onChange={(e)=> setuser({...user , username: e.target.value})}
// placeholder='Entre username'/>
// <div className='w-2/3'><label className='text-1xl' htmlFor="email">Entre email</label> </div>
// <input type="text"
// id='email'
// value={user.email}
// onChange={(e)=>setuser({...user , email: e.target.value})}

//  className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 '
// placeholder='Enter email'
//  />
//  <div className='w-2/3'><label className='text-1xl ' htmlFor="password">Enter Password</label> </div>
//  <input  className='text-white bg-gradient-to-r from-slate-900 to-slate-700 text-lg pl-3 pt-2 pb-2 rounded-full w-2/3 ' type="password"  placeholder='Enter Password' value={user.password} 
//  onChange={ (e) => setuser({...user , password:e.target.value})} />
//  <button  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  text-white font-medium flex items-center justify-center p-3 rounded-full' onClick={onSignup}
//   >
//   {buttondisable ? "plese fill the form" : "signup"}
//  </button>
//  <Link className='  text-white font-medium flex items-center justify-center p-3 rounded-full' href='/login'>Already have account</Link>
//  </div>
// </div>
// </>
//   )
// }

// export default SignupPage
// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// function SignupPage() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     username: ""
//   })

//   const [buttonDisable, setButtonDisable] = useState(true)
//   const [loading, setLoading] = useState(false)

//   const onSignup = async () => {
//     try {
//       if (!buttonDisable) {
//         setLoading(true)
//         const response = await axios.post("/api/users/signup", user)
//         console.log("Signup success", response.data);
//         router.push("/login")
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     setButtonDisable(!(user.email.length > 0 && user.password.length > 0 && user.username.length > 0))
//   }, [user])

//   return (
//     <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 p-4'>
//       <div className='h-full w-full max-w-md bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-center items-center rounded-3xl gap-4 p-6'>
//         <h1 className='text-3xl sm:text-5xl text-white font-bold text-center'>
//           {loading ? "Processing..." : "Signup"}
//         </h1>
//         <div className='w-full'>
//           <label className='text-lg' htmlFor="username">Username</label>
//         </div>
//         <input
//           type="text"
//           id='username'
//           className='text-white bg-gradient-to-r from-slate-800 to-slate-700 text-lg p-2 rounded-full w-full'
//           value={user.username}
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//           placeholder='Enter username'
//         />
//         <div className='w-full'>
//           <label className='text-lg' htmlFor="email">Email</label>
//         </div>
//         <input
//           type="text"
//           id='email'
//           className='text-white bg-gradient-to-r from-slate-800 to-slate-700 text-lg p-2 rounded-full w-full'
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder='Enter email'
//         />
//         <div className='w-full'>
//           <label className='text-lg' htmlFor="password">Password</label>
//         </div>
//         <input
//           type="password"
//           id='password'
//           className='text-white bg-gradient-to-r from-slate-800 to-slate-700 text-lg p-2 rounded-full w-full'
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           placeholder='Enter password'
//         />
//         <button
//           className={`bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium flex items-center justify-center p-3 rounded-full w-full mt-4 ${buttonDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
//           onClick={onSignup}
//           disabled={buttonDisable}
//         >
//           {buttonDisable ? "Please fill the form" : "Signup"}
//         </button>
//         <Link href='/login' className='text-white font-medium flex items-center justify-center p-3 rounded-full mt-2'>
//           Already have an account?
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default SignupPage
'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisable, setButtonDisable] = useState(true)
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      if (!buttonDisable) {
        setLoading(true)
        const response = await axios.post("/api/users/signup", user)
        console.log("Signup success", response.data);
        router.push("/login")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  }

  useEffect(() => {
    setButtonDisable(!(user.email.length > 0 && user.password.length > 0 && user.username.length > 0))
  }, [user])

  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden'>
      <div className='h-auto w-full max-w-md bg-gradient-to-r from-slate-800 to-slate-700 flex flex-col justify-center items-center rounded-3xl shadow-xl gap-6 p-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-white text-center'>
          {loading ? "Processing..." : "Create Your Account"}
        </h1>
        
        {/* Username Input */}
        <div className='w-full'>
          <label className='text-lg text-white' htmlFor="username">Username</label>
        </div>
        <input
          type="text"
          id='username'
            className='text-white bg-transparent border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-lg p-3 rounded-full w-full transition-all duration-300'
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder='Enter username'
        />

        {/* Email Input */}
        <div className='w-full mt-4'>
          <label className='text-lg text-white' htmlFor="email">Email</label>
        </div>
        <input
          type="text"
          id='email'
           className='text-white bg-transparent border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-lg p-3 rounded-full w-full transition-all duration-300'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder='Enter email'
        />

        {/* Password Input */}
        <div className='w-full mt-4'>
          <label className='text-lg text-white' htmlFor="password">Password</label>
        </div>
        <input
          type="password"
          id='password'
           className='text-white bg-transparent border border-slate-600 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-lg p-3 rounded-full w-full transition-all duration-300'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder='Enter password'
        />

        {/* Signup Button */}
        <button
          onClick={onSignup}
          className={`w-full h-12 mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium rounded-full transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-fuchsia-500 ${buttonDisable ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          disabled={buttonDisable}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {/* Link to Login */}
        <div className="mt-4 text-center">
          <Link href='/login' className="text-white text-lg hover:underline transition-all duration-300">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
