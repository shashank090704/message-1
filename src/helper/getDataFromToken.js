// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// export const getDataFromToken = (request) => {
//     try {
//         const token = request.cookies.get("token")?.value || '';
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         return decodedToken;
//     } catch (error) {
//         throw new Error(error.message);
//     }

// }
import jwt from "jsonwebtoken";

export async function GetDataFromToken(request){
    try {
        const token = await request.cookies.get("token").value || '';
        const decodedToken = await jwt.verify(token, process.env.TOOKEN_SECREAT);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }

}

// import jwt from "jsonwebtoken";
// import { cookies } from 'next/headers';

// export async function GetDataFromToken() {
//     try {
//         const allCookies = cookies().getAll();
//         const token = allCookies.find(cookie => cookie.name === "token")?.value || '';
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         return decodedToken.id ;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }

// import { cookies } from 'next/headers'
 
// export async function getCookieData() {
//   const cookieData = cookies().getAll()
//   const token = cookieData.find(cookie => cookie.name === "token")?.value || '';
//   const resolve(token){
//     const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//     return decodedToken.id ;
//   }
  
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(token)
//     }, 1000)
//   )
// }\

// import jwt from 'jsonwebtoken';
// import { cookies } from 'next/headers';

// export async function GetDataFromToken() {
//   const cookieData = cookies().getAll();
//   const token = cookieData.find(cookie => cookie.name === "token")?.value || '';

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
//         resolve(decodedToken.id);
//       } catch (error) {
//         reject(new Error(error.message));
//       }
//     }, 1000);
//   });
// }

