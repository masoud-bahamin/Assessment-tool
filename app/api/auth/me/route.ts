import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenConfigs";

export async function GET(req: NextRequest) {
  try {
    const allCookie = cookies();
    const token = allCookie.get("token")?.value;
    console.log("tooooooooooooooooooooooooooken", token);
    if (!token) {
      return NextResponse.json(
        { result: false, message: "token not found" },
        { status: 403 }
      );
    }
    connectToDb();

    const email = verifyToken(token);
    if (!email) {
      return NextResponse.json(
        { result: false, message: "email not found" },
        { status: 403 }
      );
    }
    console.log("emaaaaaaaaaaaaaaaaaaaaaaail", email);

    const user = await userModel.findOne({ email }, "-__v -password");
    // .populate("Tests", "-__v")
    // .populate("TestsResult")
    // .lean();
    return NextResponse.json({ result: true, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

// export const dynamic = "force-static";
