import {connect} from '@/lib/dbconnect'
import Users from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'
import bycrypt from "bcryptjs"
import { SendEmail } from '@/helper/mailer'


connect()

export async function POST(request){

try {
    const reqBody = await request.json()
    const { username , email, password} = reqBody
    console.log(reqBody);

   const user =  await Users.findOne({email})
   if(user){
    return NextResponse.json({error : 'user alredy exisy'}, {status : 400})
   }
    const salt = await bycrypt.genSalt(10);
    const hashedpasword = await bycrypt.hash(password, salt)
    
    const newUser = new Users({
        username,
        email,
        password : hashedpasword
    })

     const saveduser = await newUser.save()

      console.log(saveduser)
    
      SendEmail({email : saveduser.email, emailType :"VERIFY", userId : saveduser._id})
     return NextResponse.json({
        messsage : 'message send sussecfully'
     })

     
    
} catch (error) {
    return NextResponse.json({error : error.message}, {status : 500})
}

}