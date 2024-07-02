// 'use client'
// import { useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// // import style from "@/Stylesheet/page.module.css"
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()
 
 
//   return (
//     <>
//     <div className='h-screen w-screen '>
      
    
//     <h1 className='bg-black text-center font-sans text-lg font-bold h-20  flex flex-row-reverse gap-16 items-center pr-4 '>
//      <Link href='/login'  className='h-1/2 text-black flex bg-gradient-to-r from-amber-200 to-yellow-500 items-center justify-center w-20  rounded-md  text-md'>Login</Link> 
//       <Link href='/signup'className='h-1/2 flex bg-gradient-to-r from-amber-200 to-yellow-500 items-center justify-center  w-20  rounded-md text-black text-md'>Signup</Link>
//       </h1>
//     <div className='h-96 bg-black'>
//       <div className='h-full w-3/5 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-sans font-bold text-9xl flex justify-center pl-7'> Welcome To Connect </div>
     
//     </div>
//     </div>
//     </>
  
//   )
// }
'use client'
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className='min-h-screen w-screen bg-black flex flex-col'>
        <header className='h-20 flex justify-end items-center gap-4 pr-4'>
          <Link href='/login' className='h-10 flex items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500 w-20 rounded-md text-black text-lg font-bold'>
            Login
          </Link>
          <Link href='/signup' className='h-10 flex items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500 w-20 rounded-md text-black text-lg font-bold'>
            Signup
          </Link>
        </header>
        <main className='flex flex-grow items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-bold'>
              Welcome To Connect
            </h1>
          </div>
        </main>
      </div>
    </>
  )
}
