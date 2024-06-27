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
// import { cookies } from 'next/headers'
// import jwt from "jsonwebtoken";

 
// async function GetDataFromToken() {
//   const cookieData = cookies().getAll()
//   return new Promise((resolve) =>
//     setTimeout(() => {
//         const decodedToken = jwt.verify(cookieData, process.env.TOOKEN_SECREAT);
//     }, 1000)
//   )
// }