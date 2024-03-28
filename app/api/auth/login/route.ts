import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { comparePassword } from "@/utils/hashPasword";
import { createToken } from "@/utils/tokenConfigs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    connectToDb();
    const { email, password } = body;
    const user = await userModel.findOne({ email });
    if (!user)
      return NextResponse.json(
        { result: false, error: "email is NOT valid" },
        { status: 400 }
      );
    const hashPass = await comparePassword(password, user.password);
    if (!hashPass)
      return NextResponse.json(
        { result: false, error: "email or password is NOT valid" },
        { status: 401 }
      );
    const token = createToken(email);
    if (!token) return NextResponse.json({ result: false }, { status: 403 });
    const HeaderCookie = cookies();
    HeaderCookie.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ result: true, token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
