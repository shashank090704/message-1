import { connect } from '@/lib/dbconnect';
import Users from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;
        console.log(token)

        const user = await Users.findOne({
            verifytoken: token
           
        });

        if (!user) {
            console.log("No user found");
            return NextResponse.json({ error: "No user found" }, { status: 404 });
        }

        user.isverified = true;
        await user.save();
        

        return NextResponse.json({ message: "Email verified successfully", success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
