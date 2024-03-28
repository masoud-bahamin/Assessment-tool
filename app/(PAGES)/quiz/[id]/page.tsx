import Quiz from "@/components/templates/pages/QuizInfo/Quiz";
import quizModel from "@/models/quizModel";
import { getUserInfoFromToken } from "@/utils/checkUser";
import connectToDb from "@/utils/connectToDb";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

async function QuizInfo({ params }: { params: { id: string } }) {
  const user = await getUserInfoFromToken();
  if (!user) {
    return redirect("/signin");
  }
  connectToDb();
  const quiz = await quizModel.findOne({ _id: params.id });

  return (
    <div className="flex">
      <div className="bg-primary-200 w-1/3 h-screen text-center p-10">
        <Image src={"/img/q1.png"} alt="quiz" width={400} height={400} />
      </div>

      <Quiz quiz={JSON.parse(JSON.stringify(quiz))} />
    </div>
  );
}

export default QuizInfo;
