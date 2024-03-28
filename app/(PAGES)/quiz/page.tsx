import quizModel from "@/models/quizModel";
import { getUserInfoFromToken } from "@/utils/checkUser";
import connectToDb from "@/utils/connectToDb";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function Quiz() {
  const user = await getUserInfoFromToken();
  if (!user) {
    return redirect("/signin");
  }

  connectToDb();
  const quizes = await quizModel.find({});

  return (
    <div className="flex">
      <div className="bg-primary-200 w-1/3 h-screen text-center p-10">
        <Image src={"/img/q1.png"} alt="quiz" width={400} height={400} />
      </div>
      <div className="w-2/3">
        <h3 className="w-full text-2xl mb-6 bg-primary-200 text-white px-3 py-5">
          Quiz List:
        </h3>
        <div className="max-w-4xl lg:px-20 py-12">
          {quizes.map((item: { _id: string; title: string }, index: number) => (
            <Link
              href={`/quiz/${item._id}`}
              key={item._id}
              className="p-3 text-2xl leading-10 block"
            >
              {index + 1}. {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
