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

export const GetDataFromToken = (request) => {
    try {
        const token = request.cookies.get("token").value || '';
        const decodedToken = jwt.verify(token, process.env.TOOKEN_SECREAT);
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }

}