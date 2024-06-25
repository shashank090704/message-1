import {connect} from "@/lib/dbconnect"
import { NextRequest,NextResponse } from "next/server"
import Users from "@/models/user"
import { GetDataFromToken } from "@/helper/getDataFromToken"

connect()
 export async function POST(request){
    try {
         const reqbody = await request.json()
          const { biodata} = reqbody
        console.log(biodata)
        console.log(reqbody)
        const userid = await GetDataFromToken(request)
          //  console.log(biodata)
          //  console.log(userid)
        const user = await Users.findById(userid)
        user.bio = biodata
        console.log(user)
        await user.save()
        console.log(user)
      return  NextResponse.json({mesaage : "bio change"})


        
    } catch (error) {
        console.log(error)
        return  NextResponse.json({mesaage : "bio not  change"})
    }
 }