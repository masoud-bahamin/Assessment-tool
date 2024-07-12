import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { verifyToken } from "@/utils/tokenConfigs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const myCookies = cookies();
    const token = myCookies.get("token")?.value!;
    const email = verifyToken(token);
    const body = await req.json();
    connectToDb();
    const newUser = await userModel.findOneAndUpdate({ email }, { ...body });
    return NextResponse.json({ result: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
