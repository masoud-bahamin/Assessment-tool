import quizModel from "@/models/quizModel";
import connectToDb from "@/utils/connectToDb";
import { createQuizValidator } from "@/validations/server/quizValidator";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenConfigs";
import userModel from "@/models/userModel";
import { Context } from "vm";

export async function PUT(req: NextRequest, context: Context) {
  const id = context.params.id;
  try {
    // const allCookies = cookies();
    // const token = allCookies.get("token")?.value;
    // console.log(token);

    // const email = verifyToken(token);
    // const user = await userModel.findOne({ email });

    const body = await req.json();
    // const validation = createQuizValidator(body);
    // if (validation !== true)
    //   return NextResponse.json(
    //     { result: false, error: validation },
    //     { status: 400 }
    //   );
    connectToDb();
    const quiz: QuisType = await quizModel.findOne({
      _id: body.QuizId,
    });

    const newQuestions = quiz.questions.map((item) => {
      if (item._id === id) {
        item.question = body.question as string;
      }
      return item;
    });

    const updateQuiz: QuisType = await quizModel.findOneAndUpdate(
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

export const dynamic = "force-static";
