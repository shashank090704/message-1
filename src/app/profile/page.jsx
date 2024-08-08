// 'use client';
// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import toast from "react-hot-toast";
// import { useRouter } from 'next/navigation';
// import SimpleDateTime from 'react-simple-timestamp-to-date';
// import Image from 'next/image';




// function ProfilePage() {


//     const router  = useRouter()
//     const [maildata , setmaildata] = useState([])
//     const [bio , setbio] = useState(false)
//     const [data, setData] = useState("");
//     const [biodata , setbiodata] = useState("")
//     const[loginout , setloginout] = useState(false)
//     const[image , setimage] = useState("")
   
    
//     const getDetails = async () => {
//         try {
//             const response = await axios.get("/api/users/profile"); 
//             setData(response.data.data)  
//         } catch (error) {
//             toast.error("Failed to fetch profile data");
//             console.error(error);
//             router.push('/login')
//         }
//     };
//     const  biofunction = ()=>{
//         if(bio){
//             setbio(false)
       
//         }else{
//             setbio(true)
         
//         }
//     }
//     const logout = async() =>{
//         try {
//             setloginout(true)
//             const log = await axios.get('/api/users/logout')
//             router.push('/login')
//         } catch (error) {
//             console.log("error in loging out")
//         }
//     }
//     const getdata = async()=>{
//         try {
//             const biod = await axios.post("/api/users/setbio" ,{biodata});
          
//             setbio(!bio)
//         } catch (error) {
//             console.log(error)
//         }
       
//     }
//     const getmail = async()=>{
//         try {
//             const mailsend = await axios.post("/api/users/findmessage")
           
//                setmaildata(mailsend.data.message)
           
//         } catch (error) {
//             console.log(error)
//         }
       
       
//       }

//     const converbase64 = async(e)=>{
//        var render = new FileReader()
//        render.readAsDataURL(e.target.files[0])
//        render.onload = ()=>{
//         console.log(render.result)
//         setimage(render.result)
        
//        }
//        render.onerror = (error)=>{
//         console.log(error)
//        }
//     }

//     const sendimage = async(image)=>{
//         if(image){
//         await axios.post("/api/users/uplodfile", {image})
//         getDetails()
//     }
//     }
//     useEffect(()=>{
//         sendimage(image)
//     },[image])
//     useEffect(() => {
       
//         getDetails();
       
//     }, [bio]);

    
   

//     return (
//         <div  className='h-screen w-screen bg-black  overflow-x-hidden'>
//           <div className='ml-5 h-1/12 flex items-center justify-between p-4 '> <div className='h-0 shadow-[-3px_6px_309px_43px_#805ad5] flex items-center justify-center'> <h1 className='inline-block text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-5xl ] '>{loginout ? "Loging out .............":"Profile Page"}</h1></div>
//             <button  className='bg-gradient-to-r from-fuchsia-600 to-purple-600  h-10 w-20 text-white font-medium pr-2 rounded-full shadow-[-3px_6px_309px_43px_#805ad5]' onClick={logout}>Logout</button>
            
//             </div> 
//            <div className='h-1/3  flex mt-2 ml-4 mb-4 mr-2 rounded-md'>
//            <div className='h-full w-1/6 mb-4 '> <img src={data.dp} onClick={(e)=>{input.click()}}     className='h-full w-auto aspect-square rounded-full object-cover overflow-hidden transition duration-700 hover:shadow-[0px_25px_97px_0px_#4c51bf,0px_-25px_97px_0px_#c53030]'  /></div>
//            <div className='h-full w-1/6  flex justify-center gap-2 flex-col pl-2'>
//             <p className=' bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Username: @{data.username}</p>
//             <p className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-3xl '>Email: {data.email}</p>
           
//             </div>
//             <div className=' text-lg font-medium h-full w-1/4  pl-1 pt-2 flex  flex-col gap-2' >
            
//             { bio ? <p><input className=' outline-none text-black text-lg pl-3 pt-2 pb-2 rounded-full w-2/3' type="text" placeholder='Set bio' value={biodata} onChange={(e)=>{setbiodata( e.target.value)}} /></p> : <h1 className='bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent p-2 font-bold text-xl' > About me:<p> {data.bio} </p> </h1>}
//             {  bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full  w-1/4 shadow-[-3px_6px_309px_43px_#805ad5]' onClick={getdata} >Set bio</button> : <p></p>} 
//             {  !bio? <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1 rounded-full w-1/4 transition duration-300 hover:shadow-[-3px_6px_309px_43px_#805ad5] ' onClick={biofunction} >Set bio</button> : <p></p>}
           
//             </div>
//             </div>
//             <div>
           
//             </div>
//            <div className=' m-4 h-0   flex items-center justify-center transition duration-300 '>  <div className='text-white text-lg pl-2 '> Send messeage me on  <div className='bg-gradient-to-r text-lg font-bold from-fuchsia-600 to-purple-600 bg-clip-text text-transparent inline-block'>https://message-1-alpha.vercel.app/sendmessage/{data.username}</div> </div> </div> 
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

   
//         <input className='diplay hidden' type="file" id='input' accept='image/*'  name='file'  onChange={converbase64}/>
    
//         </div>
//     );
// }

// export default ProfilePage;

'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import Image from 'next/image';

function ProfilePage() {
    const router = useRouter();
    const [maildata, setmaildata] = useState([]);
    const [bio, setbio] = useState(false);
    const [data, setData] = useState("");
    const [biodata, setbiodata] = useState("");
    const [loginout, setloginout] = useState(false);
    const [image, setimage] = useState("");
    const getDetails = async () => {
        try {
            const response = await axios.get("/api/users/profile");
            setData(response.data.data);
        } catch (error) {
            toast.error("Failed to fetch profile data");
            console.error(error);
            router.push('/login');
        }
    };

    const biofunction = () => {
        setbio(!bio);
    };

    const logout = async () => {
        try {
            setloginout(true);
           const res =  await axios.post('/api/users/logout');
            router.push('/login');
        } catch (error) {
            console.log("error in logging out");
        }
    };

    const getdata = async () => {
        try {
            await axios.post("/api/users/setbio", { biodata });
            setbio(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getmail = async () => {
        try {
            const mailsend = await axios.post("/api/users/findmessage");
            setmaildata(mailsend.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const converbase64 = (e) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setimage(reader.result);
        };
        reader.onerror = (error) => {
            console.log(error);
        };
    };

    const sendimage = async (image) => {
        if (image) {
            await axios.post("/api/users/uplodfile", { image });
            getDetails();
        }
    };

    useEffect(() => {
        sendimage(image);
    }, [image]);

    useEffect(() => {
        getDetails();
    }, [bio]);

    return (
        <div className='min-h-screen w-screen bg-black overflow-x-hidden'>
            <div className='flex items-center justify-between p-4'>
                <h1 className={`text-2xl sm:text-5xl font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent transition duration-500 ${loginout ? "animate-pulse" : ""}`}>
                    {loginout ? "Logging out..." : "Profile Page"}
                </h1>
                <button className='bg-gradient-to-r from-fuchsia-600 to-purple-600 h-10 w-20 text-white font-medium rounded-full shadow-[-3px_6px_309px_43px_#805ad5]' onClick={logout}>
                    Logout
                </button>
            </div>
            <div className='flex flex-col sm:flex-row items-center sm:items-start mt-4 space-y-4 sm:space-y-0 sm:space-x-4 p-4'>
                <div className='w-24 h-24 sm:w-48 sm:h-48'>
                    <img src={data.dp} alt='   tap to change dp' onClick={() => document.getElementById('input').click()} className='w-full h-full rounded-full object-cover cursor-pointer  transition duration-500 ease-in-out hover:shadow-[0px_25px_97px_0px_#4c51bf,0px_-25px_97px_0px_#c53030]'  />
                </div>
                <div className='flex flex-col items-center sm:items-start'>
                    <p className='text-2xl sm:text-3xl font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent'>
                        Username: @{data.username}
                    </p>
                    <p className='text-2xl sm:text-3xl font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent'>
                        Email: {data.email}
                    </p>
                </div>
                <div className='flex flex-col items-center sm:items-start'>
                    {bio ? (
                        <>
                            <input className='outline-none text-black text-lg pl-3 py-2 rounded-full w-full sm:w-2/3' type="text" placeholder='Set bio' value={biodata} onChange={(e) => setbiodata(e.target.value)} />
                            <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 py-1 px-4 rounded-full shadow-lg mt-2' onClick={getdata}>
                                Set bio
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className='text-xl font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent'>
                                About me: {data.bio}
                            </h1>
                            <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 py-1 px-4 rounded-full transition duration-500 hover:shadow-[-3px_6px_309px_43px_#805ad5] mt-2' onClick={biofunction}>
                                Set bio
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className='flex items-center justify-center p-4'>
                <div className='text-white text-lg'>
                    Send message me on <a href={`https://message-1-alpha.vercel.app/sendmessage/${data.username}`} className='text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent'>{`https://message-1-alpha.vercel.app/sendmessage/${data.username}`}</a>
                </div>
            </div>
            <button className='text-lg font-medium bg-gradient-to-r from-fuchsia-500 to-pink-500 py-2 px-4 rounded-full shadow-lg m-4 transition duration-500 ease-in-out hover:shadow-[-3px_6px_309px_43px_#805ad5]' onClick={getmail}>
                Get mails
            </button>
            {maildata.length > 0 && (
                <div className='p-4 flex flex-wrap gap-4'>
                    {maildata.map((m, index) => (
                        <div key={index} className='text-white bg-black p-4 rounded-lg shadow-lg transition duration-300 hover:shadow-[0_20px_50px_rgba(8,_110,_190,_0.9)]'>
                            <div className='text-sm font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent'>
                                <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">
                                    {m.date}
                                </SimpleDateTime>
                            </div>
                            <div className='text-xl font-bold text-black bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent'>
                                {m.content}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <input type="file" id='input' accept='image/*' name='file' className='hidden' onChange={converbase64} />
        </div>
    );
}

export default ProfilePage;

