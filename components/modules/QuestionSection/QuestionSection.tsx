"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

function shuffleArray(array: [string, string][]) {
  const array1 = [];
  const array2 = [];
  const array3 = [];
  const array4 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * array.length);

    if (randomIndex < array.length - 1 && randomIndex >= array.length - 2) {
      array1.push(array[i]);
    } else if (
      randomIndex < array.length - 2 &&
      randomIndex >= array.length - 3
    ) {
      array2.push(array[i]);
    } else if (
      randomIndex < array.length - 3 &&
      randomIndex >= array.length - 4
    ) {
      array3.push(array[i]);
    } else {
      array4.push(array[i]);
    }
  }
  return [...array1, ...array2, ...array3, ...array4];
}

function QuestionSection({
  _id,
  question,
  answer,
  setAnswers,
  nextHandler,
}: QuestionType & {
  nextHandler: () => void;
  setAnswers: Dispatch<
    SetStateAction<
      {
        _id: string;
        answer: string;
      }[]
    >
  >;
}) {
  const [clicked, setClicked] = useState("");
  const [newAnswers, setnewAnswers] = useState<[string, string][]>([]);

  useEffect(() => {
    if (answer !== "false" && answer !== "true") {
      const arr = shuffleArray(Object.entries(answer));
      setnewAnswers(arr);
    }
  }, [answer, question]);

  if (!newAnswers) {
    return <p>loading</p>;
  }

  return (
    <div>
      <p className="mb-6 text-2xl leading-10">{question}</p>
      <div className="mb-6">
        {answer === "false" || answer === "true" ? (
          <>
            <p
              onClick={() => {
                setAnswers((prev) => prev.filter((i) => i._id !== _id));
                setAnswers((prev) => [
                  ...prev,
                  {
                    _id,
                    answer: answer === "true" ? "correctAnswer" : "wrongAnswer",
                  },
                ]);
                setClicked("true");
                nextHandler();
              }}
              className={`${
                clicked === "true" ? "bg-blue-200" : ""
              } p-3 mb-4 text-lg border rounded-lg cursor-pointer hover:bg-blue-200 w-96`}
            >
              True
            </p>
            <p
              onClick={() => {
                setAnswers((prev) => prev.filter((i) => i._id !== _id));
                setAnswers((prev) => [
                  ...prev,
                  {
                    _id,
                    answer:
                      answer === "false" ? "correctAnswer" : "wrongAnswer",
                  },
                ]);
                setClicked("false");
                nextHandler();
              }}
              className={`${
                clicked === "false" ? "bg-blue-200" : ""
              } p-3 mb-4 text-lg border rounded-lg cursor-pointer hover:bg-blue-200 w-96`}
            >
              False
            </p>
          </>
        ) : (
          <>
            {newAnswers.map((item) => (
              <p
                onClick={() => {
                  setAnswers((prev) => prev.filter((i) => i._id !== _id));
                  setAnswers((prev) => [...prev, { _id, answer: item[0] }]);
                  // setClicked(item[0]);
                  nextHandler();
                }}
                key={item[1]}
                className={`${
                  clicked === item[0] ? "bg-blue-200" : ""
                } p-3 mb-4 text-lg border rounded-lg cursor-pointer hover:bg-blue-200 min-w-96`}
              >
                {item[1]}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default QuestionSection;
