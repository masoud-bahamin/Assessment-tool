import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { hashPassword } from "@/utils/hashPasword";
import { createToken } from "@/utils/tokenConfigs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    connectToDb();
    const { email, password } = body;
    const hashPass = await hashPassword(password);
    const user = await userModel.create({ email, password: hashPass });
    const token = createToken(email);
    if (!token) return NextResponse.json({ result: false }, { status: 403 });
    const HeaderCookie = cookies();
    HeaderCookie.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ result: true, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
