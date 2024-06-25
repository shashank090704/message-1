'use client'
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import style from "@/Stylesheet/page.module.css"
import Link from "next/link";

export default function Home() {
  const router = useRouter()
 
 
  return (
    <>
    <div className='h-screen w-screen '>
      
    
    <h1 className='bg-black text-center font-sans text-lg font-bold h-20  flex flex-row-reverse gap-16 items-center pr-4 '>
     <Link href='/login'  className='h-1/2 text-black flex bg-gradient-to-r from-amber-200 to-yellow-500 items-center justify-center w-20  rounded-md  text-md'>Login</Link> 
      <Link href='/signup'className='h-1/2 flex bg-gradient-to-r from-amber-200 to-yellow-500 items-center justify-center  w-20  rounded-md text-black text-md'>Signup</Link>
      </h1>
    <div className='h-96 bg-black'>
      <div className='h-full w-3/5 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-sans font-bold text-9xl flex justify-center pl-7'> Welcome To Connect </div>
     
    </div>
    </div>
    </>
  
  )
}
