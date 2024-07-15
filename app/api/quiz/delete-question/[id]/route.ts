import quizModel from "@/models/quizModel";
import userModel from "@/models/userModel";
import connectToDb from "@/utils/connectToDb";
import { verifyToken } from "@/utils/tokenConfigs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Context } from "vm";

export async function DELETE(req: NextRequest, context: Context) {
  const id = context.params.id;
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

    const body = await req.json();

    connectToDb();
    const quiz: QuizType = await quizModel.findOne({
      _id: body.QuizId,
    });

    const newQuestions = quiz.questions.filter((item) => item._id !== id);

    const updateQuiz: QuizType = await quizModel.findOneAndUpdate(
      {
        _id: body.QuizId,
      },
      {
        questions: newQuestions,
      }
    );

    return NextResponse.json({ result: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ result: false }, { status: 500 });
  }
}

// export const dynamic = "force-static";
