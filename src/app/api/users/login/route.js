// import {connect} from '@/lib/dbconnect'
// import Users from '@/models/user'
// import { NextRequest, NextResponse } from 'next/server'
// import bycrypt from "bcryptjs"
// import {sendEmail}  from "@/helper/mailer"
// import message from '@/models/message'
// import  jwt  from 'jsonwebtoken'


// connect()

// export async function POST(request){

//     try {
//         const reqbody = await request.json()
//         console.log(reqbody)

//         const { username , password} = reqbody
//         console.log(username)
//         console.log(password)

//         const user = await Users.findOne({username : username})
//         console.log(user)
//         if(!user){
//           return  NextResponse.json({message :' no user found'})
//         }
//         const validPaword = await bycrypt.compare(password,user.password)
//          console.log(validPaword)
//         if(!validPaword){
//           return NextResponse.json({message : 'wrong password'})
//         }
//         const tokendata = {
//             id : user._id
           
//         }
//         console.log(tokendata)
//         const token = await jwt.sign(tokendata, process.env.TOKEN_SECRET, {expiresIn: "1d"})

//         console.log("token made")
//       // return  NextResponse.json({jwt: token});

//         const response = NextResponse.json({
//             message : "Logged in success",
//             success : true
//         })
//         response.cookies.set("token", token , {
//             httpOnly : true
//         } )
//         console.log("cookies set")
//         return response

//     } catch (error) {
//       return NextResponse.json({error : error.message})
//     }
// }
// import connect from '@/lib/dbconnect';
// import Users from '@/models/user';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// connect();

// export async function post(req, res) {
//     try {
//         const { username, password } = req.body;

//         const user = await Users.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ message: 'No user found' });
//         }

//         const validPassword = await bcrypt.compare(password, user.password);
//         if (!validPassword) {
//             return res.status(401).json({ message: 'Wrong password' });
//         }

//         const tokenData = {
//             id: user._id,
//             username: user.username,
//             email: user.email
//         };

//         const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' });

//         res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
//         return res.status(200).json({
//             message: "Logged in successfully",
//             success: true
//         });

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }
import { connect } from '@/lib/dbconnect';
import Users from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request) {
    try {
        const reqbody = await request.json();
        console.log(reqbody);
        const { username, password } = reqbody;
        console.log(username);
        console.log(password);

        const user = await Users.findOne({ username: username });
        console.log(user);
        if (!user) {
            return NextResponse.redirect("/login")
        }

        const validPassword = await bcrypt.compare(password, user.password);
        console.log(validPassword);
        if (!validPassword) {
            return NextResponse.json({ message: 'Wrong password' });
        }

        const tokenData = {
          username: user.username,
          id: user._id
      }
      const token =  await jwt.sign(tokenData, process.env.TOOKEN_SECREAT, { expiresIn: '1d' });

      const response = NextResponse.json({ message: "Login successfull" });


      response.cookies.set("token", token, { httpOnly: true });
      return response;

    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
