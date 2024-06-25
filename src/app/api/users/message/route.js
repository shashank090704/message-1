import { NextRequest , NextResponse } from "next/server";
import { connect } from "@/lib/dbconnect";
import Users from '@/models/user'
import Message from '@/models/message'

connect()

export async function POST(request){

    try {
        const reqbody = await request.json()
    
        const {data , user} = reqbody
        
        const newuser = await Users.findOne({username : user})
        const post =  new Message({
            content : data,
            date : Date.now(),
            user : newuser._id
        })

       const newpost = await post.save() 
     newuser.message.push(newpost._id)  
        const newnewuser =  await newuser.save()
       
        
        return NextResponse.json({succes : "data send"})
    } catch (error) {
        return NextResponse.json({error : "data not come"})
    }
}