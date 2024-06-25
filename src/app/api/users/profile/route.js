// import { connect } from '@/lib/dbconnect';
// import Users from '@/models/user';
// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import { GetDataFromToken } from '@/helper/getDataFromToken';

// connect();

// export async function GET(request) {
//   try {
//     const data = await GetDataFromToken(request);
//     // Return user data in response
//     const user = await Users.findOne({_id: data}).select("-password");
//     console.log(user)

//     return NextResponse.json({
//       message: "User found",
//       data: user
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       message: "Error occurred",
//       error: error.message
//     }, { status: 500 });
//   }
// }

import { connect } from '@/lib/dbconnect';
import Users from '@/models/user';
import jwt from 'jsonwebtoken';

connect();

const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default async function handler(req, res) {
  try {
    const userId = getDataFromToken(req);
    const user = await Users.findOne({ _id: userId }).select('-password');
    return res.status(200).json({
      message: 'User found',
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error occurred',
      error: error.message,
    });
  }
}
