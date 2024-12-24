
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
// 'use client'
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen bg-black text-white flex flex-col">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 bg-black border-b border-gray-800">
//         <div className="text-xl font-bold flex items-center">
//           <span className="text-yellow-500">★</span> Connect
//         </div>
//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-4xl sm:text-6xl font-bold text-yellow-500">
//           Connect With The World
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg">
//           Join millions of people who use Connect to share ideas, make friends,
//           and build communities.
//         </p>

//         {/* Boxes Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//           <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg text-left border border-gray-700 hover:scale-105 transform transition">
//             <h3 className="text-yellow-500 text-xl font-semibold">
//               Connect with People
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Find and connect with like-minded individuals from around the
//               globe.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg text-left border border-gray-700 hover:scale-105 transform transition">
//             <h3 className="text-yellow-500 text-xl font-semibold">
//               Share Your Story
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Express yourself and share your experiences with the community.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg text-left border border-gray-700 hover:scale-105 transform transition">
//             <h3 className="text-yellow-500 text-xl font-semibold">
//               Build Communities
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Create and join communities around your interests and passions.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="mt-10 px-6 py-3 rounded-full bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg">
//           Get Started Now
//         </button>
//       </main>
//     </div>
//   );
// }
// 'use client'
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-800">
//         <div className="text-2xl font-extrabold flex items-center tracking-wide">
//           <span className="text-yellow-500">★</span> Connect
//         </div>
//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-gradient">
//           Connect With The World
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg max-w-2xl">
//           Join millions of people who use <span className="text-yellow-500">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </p>

//         {/* Feature Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           <div className="group relative bg-gray-800/70 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </div>

//           <div className="group relative bg-gray-800/70 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </div>

//           <div className="group relative bg-gray-800/70 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="mt-12 px-8 py-4 rounded-full bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-600/50 transform hover:scale-105">
//           Get Started Now
//         </button>
//       </main>

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// 'use client'
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <div className="flex items-center text-2xl font-extrabold tracking-wide">
//           <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-yellow-500">Connect</span>
//         </div>

//         {/* Navigation */}
//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20">
//         {/* Title */}
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent animate-gradient">
//           Connect With The World
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg max-w-2xl">
//           Join millions of people who use <span className="text-yellow-500">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </p>

//         {/* Feature Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {/* Box 1 */}
//           <div className="relative bg-gray-800/70 p-8 rounded-lg shadow-lg border border-gray-700 group transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </div>

//           {/* Box 2 */}
//           <div className="relative bg-gray-800/70 p-8 rounded-lg shadow-lg border border-gray-700 group transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </div>

//           {/* Box 3 */}
//           <div className="relative bg-gray-800/70 p-8 rounded-lg shadow-lg border border-gray-700 group transform hover:scale-105 transition-all duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
//             <h3 className="text-2xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="mt-12 px-8 py-4 rounded-full bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-600/50 transform hover:scale-105 border border-yellow-400">
//           Get Started Now
//         </button>
//       </main>

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// 'use client'
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <div className="flex items-center text-2xl font-extrabold tracking-wide">
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-purple-400">Connect</span>
//         </div>

//         {/* Navigation */}
//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20">
//         {/* Title */}
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient">
//           Connect With The World
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg max-w-2xl">
//           Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </p>

//         {/* Feature Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {/* Box 1 */}
//           <div className="bg-purple-500 text-black p-8 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </div>

//           {/* Box 2 */}
//           <div className="bg-pink-500 text-black p-8 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </div>

//           {/* Box 3 */}
//           <div className="bg-teal-500 text-black p-8 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 border border-pink-400">
//           Get Started Now
//         </button>
//       </main>

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// 'use client'
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <div className="flex items-center text-2xl font-extrabold tracking-wide">
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-purple-400">Connect</span>
//         </div>

//         {/* Navigation */}
//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20">
//         {/* Title */}
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient">
//           Connect With The World
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg max-w-2xl">
//           Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </p>

//         {/* Feature Boxes */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {/* Box 1 */}
//           <div className="bg-purple-500 text-black p-8 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </div>

//           {/* Box 2 */}
//           <div className="bg-pink-500 text-black p-8 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </div>

//           {/* Box 3 */}
//           <div className="bg-teal-500 text-black p-8 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 border border-pink-400">
//           Get Started Now
//         </button>
//       </main>

//       {/* Animated Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
// 'use client';
// import { motion } from 'framer-motion';
// import Link from "next/link";

// export default function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex items-center text-2xl font-extrabold tracking-wide"
//         >
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-purple-400">Connect</span>
//         </motion.div>

//         {/* Navigation */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex gap-4"
//         >
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </motion.div>
//       </header>

//       {/* Hero Section */}
//       <motion.main
//         className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Title */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent"
//         >
//           Connect With The World
//         </motion.h1>
//         <motion.p
//           variants={itemVariants}
//           className="text-gray-300 mt-4 text-lg max-w-2xl"
//         >
//           Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </motion.p>

//         {/* Feature Boxes */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
//           variants={containerVariants}
//         >
//           {/* Box 1 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-purple-500 text-black p-8 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-105 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </motion.div>

//           {/* Box 2 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-pink-500 text-black p-8 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-105 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </motion.div>

//           {/* Box 3 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-teal-500 text-black p-8 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-105 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.button
//           variants={itemVariants}
//           className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 border border-pink-400"
//         >
//           Get Started Now
//         </motion.button>
//       </motion.main>

//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//     </div>
//   );
// }
// 'use client';
// import { motion } from 'framer-motion';
// import Link from "next/link";

// export default function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex items-center text-2xl font-extrabold tracking-wide"
//         >
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-purple-400">Connect</span>
//         </motion.div>

//         {/* Navigation */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex gap-4"
//         >
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </motion.div>
//       </header>

//       {/* Hero Section */}
//       <motion.main
//         className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Title */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent"
//         >
//           Connect With The World
//         </motion.h1>
//         <motion.p
//           variants={itemVariants}
//           className="text-gray-300 mt-4 text-lg max-w-2xl"
//         >
//           Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </motion.p>

//         {/* Feature Boxes */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
//           variants={containerVariants}
//         >
//           {/* Box 1 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-purple-500 text-black p-8 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-110 hover:shadow-xl transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </motion.div>

//           {/* Box 2 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-pink-500 text-black p-8 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-110 hover:shadow-xl transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </motion.div>

//           {/* Box 3 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-teal-500 text-black p-8 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-110 hover:shadow-xl transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.button
//           variants={itemVariants}
//           className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-110 border border-pink-400"
//         >
//           Get Started Now
//         </motion.button>
//       </motion.main>

//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//     </div>
//   );
// }
// 'use client';
// import { motion } from 'framer-motion';
// import Link from "next/link";

// export default function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
//       {/* Header */}
//       <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex items-center text-2xl font-extrabold tracking-wide"
//         >
//           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
//             <span className="text-black font-bold">C</span>
//           </div>
//           <span className="ml-2 text-purple-400">Connect</span>
//         </motion.div>

//         {/* Navigation */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex gap-4"
//         >
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
//           >
//             Login
//           </Link>
//           <Link
//             href="/signup"
//             className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
//           >
//             Sign Up
//           </Link>
//         </motion.div>
//       </header>

//       {/* Hero Section */}
//       <motion.main
//         className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         {/* Title */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent"
//         >
//           Connect With The World
//         </motion.h1>
//         <motion.p
//           variants={itemVariants}
//           className="text-gray-300 mt-4 text-lg max-w-2xl"
//         >
//           Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
//         </motion.p>

//         {/* Feature Boxes */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
//           variants={containerVariants}
//         >
//           {/* Box 1 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-purple-500 text-black p-8 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-125 hover:shadow-xl hover:p-10 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Connect with People
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Find and connect with like-minded individuals from around the globe.
//             </p>
//           </motion.div>

//           {/* Box 2 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-pink-500 text-black p-8 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-125 hover:shadow-xl hover:p-10 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Share Your Story
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Express yourself and share your experiences with the community.
//             </p>
//           </motion.div>

//           {/* Box 3 */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-teal-500 text-black p-8 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-125 hover:shadow-xl hover:p-10 transition-all duration-300"
//           >
//             <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
//               Build Communities
//             </h3>
//             <p className="text-gray-200 mt-3 group-hover:text-gray-100 transition-colors">
//               Create and join communities around your interests and passions.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.button
//           variants={itemVariants}
//           className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-110 border border-pink-400"
//         >
//           Get Started Now
//         </motion.button>
//       </motion.main>

//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//     </div>
//   );
// }
'use client';
import { motion } from 'framer-motion';
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="h-16 flex justify-between items-center px-6 md:px-12 bg-black/90 backdrop-blur-lg fixed top-0 w-full z-20 border-b border-gray-700">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center text-2xl font-extrabold tracking-wide"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black font-bold">C</span>
          </div>
          <span className="ml-2 text-purple-400">Connect</span>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="/login"
            className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-black transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-purple-500 text-black font-semibold hover:bg-purple-600 transition-all"
          >
            Sign Up
          </Link>
        </motion.div>
      </header>

      {/* Hero Section */}
      <motion.main
        className="flex-grow flex flex-col items-center justify-center text-center px-6 mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent"
        >
          Connect With The World
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-300 mt-4 text-lg max-w-2xl"
        >
          Join millions of people who use <span className="text-purple-400">Connect</span> to share ideas, make friends, and build communities. Let’s redefine how we interact with the world.
        </motion.p>

        {/* Feature Boxes */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12"
          variants={containerVariants}
        >
          {/* Box 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-purple-500 text-black p-10 rounded-lg shadow-lg border border-purple-700 group transform hover:scale-130 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
              Connect with People
            </h3>
            <p className="text-gray-200 mt-4 group-hover:text-gray-100 transition-colors">
              Find and connect with like-minded individuals from around the globe.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-pink-500 text-black p-10 rounded-lg shadow-lg border border-pink-700 group transform hover:scale-130 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
              Share Your Story
            </h3>
            <p className="text-gray-200 mt-4 group-hover:text-gray-100 transition-colors">
              Express yourself and share your experiences with the community.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-teal-500 text-black p-10 rounded-lg shadow-lg border border-teal-700 group transform hover:scale-130 hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
              Build Communities
            </h3>
            <p className="text-gray-200 mt-4 group-hover:text-gray-100 transition-colors">
              Create and join communities around your interests and passions.
              
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.button
          variants={itemVariants}
          className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold text-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-pink-600/50 transform hover:scale-110 border border-pink-400"
        >
          Get Started Now
        </motion.button>
      </motion.main>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
}
