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
// 'use client'
// import { useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Home() {
//   const router = useRouter()

//   return (
//     <>
//       <div className='min-h-screen w-screen bg-black flex flex-col'>
//         <header className='h-20 flex justify-end items-center gap-4 pr-4'>
//           <Link href='/login' className='h-10 flex items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500 w-20 rounded-md text-black text-lg font-bold'>
//             Login
//           </Link>
//           <Link href='/signup' className='h-10 flex items-center justify-center bg-gradient-to-r from-amber-200 to-yellow-500 w-20 rounded-md text-black text-lg font-bold'>
//             Signup
//           </Link>
//         </header>
//         <main className='flex flex-grow items-center justify-center'>
//           <div className='text-center'>
//             <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent font-bold'>
//               Welcome To Connect
//             </h1>
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }
'use client'
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="h-20 flex justify-between items-center px-6">
        <div className="text-yellow-400 font-bold text-xl flex items-center">
          <span className="material-icons">star</span>
          Connect
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="h-10 flex items-center justify-center border border-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-black w-20 rounded-full text-lg font-bold hover:opacity-90 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="h-10 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black w-20 rounded-full text-lg font-bold hover:opacity-90 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-grow flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Connect With The World
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Join millions of people who use Connect to share ideas, make friends, and build communities.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="bg-gradient-to-b from-black via-gray-800 to-black p-6 rounded-lg shadow-md max-w-xs">
            <div className="text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              <span className="material-icons">groups</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Connect with People
            </h2>
            <p className="text-gray-400 mt-2">
              Find and connect with like-minded individuals from around the globe.
            </p>
          </div>
          <div className="bg-gradient-to-b from-black via-gray-800 to-black p-6 rounded-lg shadow-md max-w-xs">
            <div className="text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              <span className="material-icons">chat</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Share Your Story
            </h2>
            <p className="text-gray-400 mt-2">
              Express yourself and share your experiences with the community.
            </p>
          </div>
          <div className="bg-gradient-to-b from-black via-gray-800 to-black p-6 rounded-lg shadow-md max-w-xs">
            <div className="text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              <span className="material-icons">share</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Build Communities
            </h2>
            <p className="text-gray-400 mt-2">
              Create and join communities around your interests and passions.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-10">
          <Link
            href="/get-started"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full text-lg font-bold hover:opacity-90 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </main>
    </div>
  );
}
