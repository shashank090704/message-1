import { NextRequest , NextResponse } from "next/server";
import Users from "@/models/user";
import Message from "@/models/message";
import { connect } from "@/lib/dbconnect";
import { getDataFromToken } from "@/helper/getDataFromToken";


connect()

export async function POST(request){
    try {
        const userid = getDataFromToken(request)
        const user = await Users.findById(userid)
        
        const message = await user.populate("message")
        console.log(message)
        return NextResponse.json(message)
    } catch (error) {
        console.log(error)
        return NextResponse.json({sucess : false})
    }
}