import {connect} from "@/lib/dbconnect"
import { NextRequest,NextResponse } from "next/server"
import Users from "@/models/user"

import fs from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import { GetDataFromToken } from "@/helper/GetDataFromToken"


connect()
 export async function POST(request){

    try {
        const data = await request.formData();
        console.log(data)
        const file = data.get('file')
        console.log(file)
    // if(!data){
    //     return NextResponse.json( {mess : "no file fetch"})
    // }
        const bytedata = await file.arrayBuffer()
        const buffer = Buffer.from(bytedata)
        console.log(buffer)
        console.log(file.name)
        const unique = uuidv4()
        const filename = unique +file.name
       
        const path = `./public/${filename}`
        console.log(path)
        await fs.writeFile(path,buffer)
        const userid = await GetDataFromToken(request)
        const user = await Users.findById(userid) 
        user.dp = filename
        
         const newuser =  await user.save()
         console.log(newuser)
        
        return NextResponse.json( {sucess : "done"})
        
    } catch (error) {
        return NextResponse.json( {sucess : "not done"})
    }
 }