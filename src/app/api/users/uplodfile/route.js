import {connect} from "@/lib/dbconnect"
import { NextResponse } from "next/server"
import Users from "@/models/user"
import { GetDataFromToken } from "@/helper/getDataFromToken"


connect()
 export async function POST(request){

    try {
        const data = await request.json();
        

        const userid = await GetDataFromToken(request)
        const user = await Users.findById(userid)
        user.dp = data.image
        const newusere = await user.save()
        return NextResponse.json( {sucess : "done"})
        
    } catch (error) {
        return NextResponse.json( {sucess : "not done"})
    }
 }