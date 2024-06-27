'use client';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import SimpleDateTime from 'react-simple-timestamp-to-date';




function ProfilePage() {
//  const input = document.querySelector("#input")
//  const but = document.querySelector("#submit")

    const router  = useRouter()
    const [maildata , setmaildata] = useState([])
    const [bio , setbio] = useState(false)
    const [data, setData] = useState("");
    const [biodata , setbiodata] = useState("")
    const[loginout , setloginout] = useState(false)
    const [file , setfile] = useState()
    const [lod , setlod] = useState("false")
    const [ dp , setdp] = useState("")
   
    
    const getDetails = async () => {
        try {
            const response = await axios.get("/api/users/profile"); 
           
            setData(response.data.data)
            setdp(`/${response.data.data.dp}`)
           
        } catch (error) {
            toast.error("Failed to fetch profile data");
            console.error(error);
            router.push('/login')
        }
    };
    const  biofunction = ()=>{
        if(bio){
            setbio(false)
       
        }else{
            setbio(true)
         
        }
    }
    const logout = async() =>{
        try {
            setloginout(true)
            const log = await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error) {
            console.log("error in loging out")
        }
    }
    const getdata = async()=>{
        try {
            const biod = await axios.post("/api/users/setbio" ,{biodata});
          
            setbio(!bio)
        } catch (error) {
            console.log(error)
        }
       
    }
    const getmail = async()=>{
        try {
            const mailsend = await axios.post("/api/users/findmessage")
           
               setmaildata(mailsend.data.message)
           
        } catch (error) {
            console.log(error)
        }
       
       
      }

      const Submit = async(e)=>{
        e.preventDefault()
        console.log(file)
        const dataa = new FormData();
        dataa.set('file',file)
        
        const uplo = await axios.post("/api/users/uplodfile",  dataa)
        setlod(!lod)
        
      }

    useEffect(() => {
       
        getDetails();
       
    }, [bio ,lod]);
   


    useEffect(() => {
        if (maildata.length > 0) {
          console.log(maildata); 
        }
      }, [maildata]);
    
   

    return (
        <div  className='h-screen w-screen bg-black  overflow-x-hidden'>
          <div className='ml-5 h-1/12 flex items-center justify-between p-4 '> <div className='h-0 shadow-[-3px_6px_309px_43px_#805ad5] flex items-center justify-center'> <h1 className='inline-block text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-5xl ] '>{loginout ? "Loging out .............":"Profile Page"}</h1></div>
            <button  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  h-10 w-20 text-white font-medium pr-2 rounded-full shadow-[-3px_6px_309px_43px_#805ad5]' onClick={logout}>Logout</button>
            
            </div> 
           <div className='h-1/3  flex mt-2 ml-4 mb-4 mr-2 rounded-md'>
           <div className='h-full w-1/6 mb-4 '> <img onClick={(e)=>{input.click()}}src={dp} alt={data.dp}    className='h-full w-auto aspect-square rounded-full object-cover overflow-hidden transition duration-700 hover:shadow-[0px_25px_97px_0px_#4c51bf,0px_-25px_97px_0px_#c53030]'  /></div>
           <div className='h-full w-1/6  flex justify-center gap-2 flex-col pl-2'>
            <p className=' bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Username: @{data.username}</p>
            <p className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Email: {data.email}</p>
            <p className='text-lg font-medium'>{data.isverified ? "your email is verified":"Please verify your email"}</p>
           
            </div>
            <div className=' text-lg font-medium h-full w-1/4  pl-1 pt-2 flex  flex-col gap-2' >
            
            { bio ? <p><input className=' outline-none text-black text-lg pl-3 pt-2 pb-2 rounded-full w-2/3' type="text" placeholder='Set bio' value={biodata} onChange={(e)=>{setbiodata( e.target.value)}} /></p> : <h1 className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-xl' > About me:<p> {data.bio} </p> </h1>}
            {  bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full  w-1/4 shadow-[-3px_6px_309px_43px_#805ad5]' onClick={getdata} >Set bio</button> : <p></p>} 
            {  !bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full w-1/4 transition duration-300 hover:shadow-[-3px_6px_309px_43px_#805ad5] ' onClick={biofunction} >Set bio</button> : <p></p>}
           
            </div>
            </div>
            <div>
           
            </div>
           <div className=' m-4 h-0   flex items-center justify-center transition duration-300 '>  <div className='text-white text-lg pl-2 '> Send messeage me on  <div className='bg-gradient-to-r text-lg font-bold from-fuchsia-600 to-purple-600 bg-clip-text text-transparent inline-block'>http://localhost:3000/sendmessage/{data.username}</div> </div> </div> 
            <button className='text-lg font-medium transition duration-300   hover:shadow-[0_20px_50px_rgba(8,_110,_190,_0.9)] p-2 rounded-full pl-2 pr-2 m-2' onClick={getmail}>Get mails</button>
           
    { maildata.length >0?  <div className='p-3 m-3   flex flex-wrap  flex-row gap-2 '>
        {maildata.map((m , index) => (
          <div key={index}  className='text-white    transition duration-300   hover:shadow-[0_20px_50px_rgba(8,_110,_190,_0.9)] bg-black p-2 rounded-lg  ' >
            <div key={index} className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-sm'><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">
  {m.date}
</SimpleDateTime></div>
            <div key={index} className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-xl'>{m.content}</div>
          </div>
        ))}
    
    </div> : <p></p>}

    <form className='' onSubmit={Submit} action='/api/users/uplodfile' method='post' >
        <input type="file" id='input'  name='file' onChange={ async(e)=>{ await setfile(e.target.files?.[0])
            
        }}/>
        <button id='submit' type='submit'> bubmit</button>
    </form>
    <div>{data.dp}</div>
    
        </div>
    );
}

export default ProfilePage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/router';
// import SimpleDateTime from 'react-simple-timestamp-to-date';
// import Image from 'next/image';
// import { getServerSideProps as getProfileData } from '@/app/api/users/profile'; // Adjust the import based on your file structure

// export const getServerSideProps = async (context) => {
//   const { req } = context;
//   const token = req.cookies.token || '';
//   let userId = null;

//   try {
//     const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//     userId = decodedToken.id;
//   } catch (error) {
//     console.error('Error verifying token:', error);
//   }

//   // Fetch user data
//   const response = await fetch(`${process.env.BASE_URL}/api/users/profile`, {
//     headers: {
//       Cookie: req.headers.cookie,
//     },
//   });

//   const result = await response.json();

//   if (!response.ok) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       userData: result.data,
//     },
//   };
// };

// function ProfilePage({ userData }) {
//   const router = useRouter();
//   const [mailData, setMailData] = useState([]);
//   const [bio, setBio] = useState(false);
//   const [bioData, setBioData] = useState('');
//   const [loginout, setLoginout] = useState(false);
//   const [file, setFile] = useState();
//   const [lod, setLod] = useState('false');
//   const [dp, setDp] = useState(`/${userData.dp}`);

//   const getDetails = async () => {
//     try {
//       const response = await axios.get('/api/users/profile');
//       setData(response.data.data);
//       setDp(`/${response.data.data.dp}`);
//     } catch (error) {
//       toast.error('Failed to fetch profile data');
//       console.error(error);
//       router.push('/login');
//     }
//   };

//   const bioFunction = () => {
//     setBio(!bio);
//   };

//   const logout = async () => {
//     try {
//       setLoginout(true);
//       await axios.get('/api/users/logout');
//       router.push('/login');
//     } catch (error) {
//       console.log('error in logging out');
//     }
//   };

//   const setBioDataFunction = async () => {
//     try {
//       await axios.post('/api/users/setbio', { biodata: bioData });
//       setBio(!bio);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getMail = async () => {
//     try {
//       const mailsend = await axios.post('/api/users/findmessage');
//       setMailData(mailsend.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const submitFile = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.set('file', file);
//     await axios.post('/api/users/uploadfile', formData);
//     setLod(!lod);
//   };

//   useEffect(() => {
//     getDetails();
//   }, [bio, lod]);


//     return (
//         <div  className='h-screen w-screen bg-black  overflow-x-hidden'>
//           <div className='ml-5 h-1/12 flex items-center justify-between p-4 '> <div className='h-0 shadow-[-3px_6px_309px_43px_#805ad5] flex items-center justify-center'> <h1 className='inline-block text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-5xl ] '>{loginout ? "Loging out .............":"Profile Page"}</h1></div>
//             <button  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  h-10 w-20 text-white font-medium pr-2 rounded-full shadow-[-3px_6px_309px_43px_#805ad5]' onClick={logout}>Logout</button>
            
//             </div> 
//            <div className='h-1/3  flex mt-2 ml-4 mb-4 mr-2 rounded-md'>
//            <div className='h-full w-1/6 mb-4 '> <img onClick={(e)=>{input.click()}}src={dp} alt={data.dp}    className='h-full w-auto aspect-square rounded-full object-cover overflow-hidden transition duration-700 hover:shadow-[0px_25px_97px_0px_#4c51bf,0px_-25px_97px_0px_#c53030]'  /></div>
//            <div className='h-full w-1/6  flex justify-center gap-2 flex-col pl-2'>
//             <p className=' bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Username: @{data.username}</p>
//             <p className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Email: {data.email}</p>
//             <p className='text-lg font-medium'>{data.isverified ? "your email is verified":"Please verify your email"}</p>
           
//             </div>
//             <div className=' text-lg font-medium h-full w-1/4  pl-1 pt-2 flex  flex-col gap-2' >
            
//             { bio ? <p><input className=' outline-none text-black text-lg pl-3 pt-2 pb-2 rounded-full w-2/3' type="text" placeholder='Set bio' value={biodata} onChange={(e)=>{setbiodata( e.target.value)}} /></p> : <h1 className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-xl' > About me:<p> {data.bio} </p> </h1>}
//             {  bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full  w-1/4 shadow-[-3px_6px_309px_43px_#805ad5]' onClick={getdata} >Set bio</button> : <p></p>} 
//             {  !bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full w-1/4 transition duration-300 hover:shadow-[-3px_6px_309px_43px_#805ad5] ' onClick={biofunction} >Set bio</button> : <p></p>}
           
//             </div>
//             </div>
//             <div>
           
//             </div>
//            <div className=' m-4 h-0   flex items-center justify-center transition duration-300 '>  <div className='text-white text-lg pl-2 '> Send messeage me on  <div className='bg-gradient-to-r text-lg font-bold from-fuchsia-600 to-purple-600 bg-clip-text text-transparent inline-block'>http://localhost:3000/sendmessage/{data.username}</div> </div> </div> 
//             <button className='text-lg font-medium transition duration-300   hover:shadow-[0_20px_50px_rgba(8,_110,_190,_0.9)] p-2 rounded-full pl-2 pr-2 m-2' onClick={getmail}>Get mails</button>
           
//     { maildata.length >0?  <div className='p-3 m-3   flex flex-wrap  flex-row gap-2 '>
//         {maildata.map((m , index) => (
//           <div key={index}  className='text-white    transition duration-300   hover:shadow-[0_20px_50px_rgba(8,_110,_190,_0.9)] bg-black p-2 rounded-lg  ' >
//             <div key={index} className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-sm'><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">
//   {m.date}
// </SimpleDateTime></div>
//             <div key={index} className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-xl'>{m.content}</div>
//           </div>
//         ))}
    
//     </div> : <p></p>}

//     <form className='hidden' onSubmit={Submit} action='/api/users/uplodfile' method='post' >
//         <input type="file" id='input'  name='file' onChange={ async(e)=>{ await setfile(e.target.files?.[0])
//             but.click()
//         }}/>
//         <button id='submit' type='submit'> bubmit</button>
//     </form>
    
//         </div>
//     );
// }

// export default ProfilePage;