import quizModel from "@/models/quizModel";
import connectToDb from "@/utils/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenConfigs";
import userModel from "@/models/userModel";
import { Context } from "vm";

export async function DELETE(req: NextRequest, context: Context) {
  const { quiz } = context.params;
  try {
    const myCookie = cookies();
    const token = myCookie.get("token")?.value;
    if (!token) {
      return NextResponse.json({ result: false }, { status: 403 });
    }
    const email = verifyToken(token);
    if (!email) {
      return NextResponse.json({ result: false }, { status: 403 });
    }
    const userInfo = await userModel.findOne({ email });

    if (userInfo.email === "USER") {
      return NextResponse.json({ result: false }, { status: 403 });
    }
    connectToDb();
    const mainQuiz: QuizType = await quizModel.deleteOne({
      _id: quiz,
    });

    return NextResponse.json({ result: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

// export const dynamic = "force-static";
