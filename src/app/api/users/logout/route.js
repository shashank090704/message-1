import {connect} from '@/lib/dbconnect'
import Users from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'
import bycrypt from "bcryptjs"
import message from '@/models/message'
import { jwt } from 'jsonwebtoken'

connect()

export async function GET(request){

try {
    const response = NextResponse.json({
        message : "Logout succesfull",
        sucess : true
    })
    response.cookies.set("token", "",{
        httpOnly : true,
        expires : new Date(0)
    } )
    return response
} catch (error) {
    
}


}