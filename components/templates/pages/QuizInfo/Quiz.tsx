"use client";

import QuestionSection from "@/components/modules/QuestionSection/QuestionSection";
import { useEffect, useReducer, useState } from "react";

type ActionType = {
  type: "add" | "minus";
  payload: number;
};

const reducer = (state: { count: number }, action: ActionType) => {
  switch (action.type) {
    case "add": {
      return {
        count: state.count + action.payload,
      };
    }

    case "minus": {
      return {
        count: state.count - action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

function Quiz({ quiz }: { quiz: QuisType }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [answers, setAnswers] = useState<{ _id: string; answer: string }[]>([]);
  const [corectAnswersCount, setcorectAnswersCount] = useState(0);

  useEffect(() => {
    const newCorectAnswersCount = answers.reduce((prev, cur) => {
      if (cur.answer === "correctAnswer") {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    setcorectAnswersCount(newCorectAnswersCount);
  }, [answers]);

  if (state.count === quiz.questions.length) {
    return (
      <div className="max-w-4xl px-4 lg:px-20 py-12">
        <h3 className="text-2xl bg-primary-100 p-6 rounded-lg mb-5">
          Knowledge Check
        </h3>
        <h3 className="text-2xl bg-primary-100 p-6 rounded-lg mb-5">
          Your Score : {corectAnswersCount} / {state.count}
        </h3>
        <h3 className="text-2xl bg-primary-100 p-6 rounded-lg mb-5">
          Passing Score : 3 / 5
        </h3>
        <p className="text-lg bg-primary-100 p-6 rounded-lg">
          Better Luck Next Time!
        </p>
      </div>
    );
  }

  const nextHandler = () => {
    dispatch({ type: "add", payload: 1 });
  };

  return (
    <div className="max-w-4xl px-4 lg:px-20 py-12">
      <h1>
        {answers.length} / {quiz.questions.length}
      </h1>
      {state.count >= 0 && state.count < quiz.questions.length ? (
        <>
          <QuestionSection
            nextHandler={nextHandler}
            {...quiz.questions[state.count]}
            setAnswers={setAnswers}
          />
          {/* {state.count > 0 ? (
            <button
              onClick={() => dispatch({ type: "minus", payload: 1 })}
              className="py-3 px-6 text-lg rounded-lg border text-primary-200 border-primary-200 mr-3"
            >
              back
            </button>
          ) : null}

          <button
            onClick={() => dispatch({ type: "add", payload: 1 })}
            className="py-3 px-6 text-lg rounded-lg bg-primary-200 text-white"
          >
            next
          </button> */}
        </>
      ) : null}
    </div>
  );
}

export default Quiz;
