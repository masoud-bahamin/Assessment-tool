import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenConfigs";

export async function GET(req: NextRequest) {
  try {
    const allCookie = cookies();
    const token = allCookie.get("token")?.value;

    if (token) {
      const email = verifyToken(token);
      connectToDb();
      const user = await userModel
        .findOne({ email }, "-__v")
        .populate("Tests", "-__v")
        .lean();
      return NextResponse.json({ result: true, user }, { status: 200 });
    } else {
      return NextResponse.json({ result: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

// export const dynamic = "force-static";
