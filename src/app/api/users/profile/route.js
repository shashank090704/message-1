import { connect } from '@/lib/dbconnect';
import Users from '@/models/user';
import {  NextResponse } from 'next/server';
import { GetDataFromToken } from '@/helper/getDataFromToken';

connect();

export async function GET(request) {
  try {
    const data = await GetDataFromToken();
    // Return user data in response
    const user = await Users.findOne({_id: data}).select("-password");
    console.log(user)

    return NextResponse.json({
      message: "User found",
      data: user
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error occurred",
      error: error.message
    }, { status: 500 });
  }
}

