import quizModel from "@/models/quizModel";
import connectToDb from "@/utils/connectToDb";
import { createQuizValidator } from "@/validations/server/quizValidator";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenConfigs";
import userModel from "@/models/userModel";

export async function PUT(req: NextRequest) {
  try {
    const allCookies = cookies();
    const token = allCookies.get("token")?.value;
    if (token) {
      const email = verifyToken(token);
      const user = await userModel.findOne({ email });

      const body = await req.json();
      const validation = createQuizValidator(body);
      if (validation !== true)
        return NextResponse.json(
          { result: false, error: validation },
          { status: 400 }
        );
      connectToDb();
      const quiz = await quizModel.create({
        ...body,
        userId: user._id,
      });
      return NextResponse.json({ result: true, quiz }, { status: 201 });
    } else {
      return NextResponse.json({ result: false }, { status: 403 });
    }
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}
