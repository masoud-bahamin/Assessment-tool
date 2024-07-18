"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";

function CreateQuizSection() {
  const [title, setTitle] = useState("");
  const [lastTitle, setLastTitle] = useState<null | string>(null);
  const [showqQuestion, setShowQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [more, setMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trueFalseAnswer, setTrueFalseAnswer] = useState<
    "true" | "false" | "idle" | "hidden"
  >("idle");
  const [answers, setAnswers] = useState({
    correctAnswer: "",
    wrongeAnswer1: "",
    wrongeAnswer2: "",
    wrongeAnswer3: "",
  });

  const saveQuiz = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/quiz/create", {
        method: "POST",
        body: JSON.stringify({
          questions,
          isOpen: true,
          title: title || Date.now(),
        }),
      });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "save successfull",
        });
        localStorage.removeItem(title);
        localStorage.removeItem("lastTitle");
      } else if (res.status === 400) {
        const data = await res.json();
        Swal.fire({
          icon: "error",
          text: data.error[0].message,
        });
      }
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: "error",
      });
      return false;
    }
  };

  const getLocalData = () => {
    const store = localStorage.getItem(title);
    if (store) {
      const array: QuestionType[] = JSON.parse(store);
      setQuestions(array);
    }
  };

  useEffect(() => {
    getLocalData();

    setLastTitle(localStorage.getItem("lastTitle"));
  }, []);

  const answerHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addQuestion = () => {
    if (
      question &&
      ((answers.correctAnswer &&
        answers.wrongeAnswer1 &&
        answers.wrongeAnswer2 &&
        answers.wrongeAnswer3) ||
        trueFalseAnswer === "false" ||
        trueFalseAnswer === "true")
    ) {
      const newItem = {
        _id: crypto.randomUUID(),
        question,
        answer:
          trueFalseAnswer === "true" || trueFalseAnswer === "false"
            ? trueFalseAnswer
            : answers,
      };
      setQuestions((prev) => [...prev, newItem]);
      localStorage.setItem(title, JSON.stringify([...questions, newItem]));
      setMore(false);
      setTrueFalseAnswer("idle");
      setQuestion("");
      setAnswers({
        correctAnswer: "",
        wrongeAnswer1: "",
        wrongeAnswer2: "",
        wrongeAnswer3: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "please complete the fildes",
      });
    }
  };

  return (
    <>
      <div className="mb-6 overflow-x-hidden">
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Create Question</div>
            <div className="group">
              <button
                type="button"
                className="dropdown-toggle text-gray-400 hover:text-text-100"
              >
                ...
                <i className="ri-more-fill" />
              </button>
              <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            {showqQuestion ? null : (
              <>
                <input
                  className="border p-2 ml-2 rounded-lg"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  type="text"
                  placeholder="Title ..."
                />

                {title.length > 2 ? (
                  <>
                    <button
                      onClick={() => {
                        setShowQuestion(true);
                        localStorage.setItem("lastTitle", title);
                        getLocalData();
                      }}
                      className="flex gap-2 text-xs ml-10 items-center py-2 px-6 border-b border-b-gray-50 bg-primary-300 text-white hover:bg-primary-200"
                    >
                      Next
                    </button>
                  </>
                ) : (
                  <>
                    {lastTitle ? (
                      <button
                        className="text-xs text-text-100 py-1 px-5 h-fit border rounded-lg"
                        onClick={() => setTitle(lastTitle)}
                      >
                        {lastTitle}
                      </button>
                    ) : null}
                  </>
                )}
              </>
            )}

            {showqQuestion ? (
              <button
                disabled={loading}
                onClick={() => {
                  saveQuiz();
                }}
                className={` ${
                  loading
                    ? "bg-primary-100 text-primary-300"
                    : "bg-primary-300 text-white"
                } flex gap-2 ml-auto items-center py-2 px-6 border-b border-b-gray-50   hover:bg-primary-200`}
              >
                <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                  {loading ? "Submiting..." : "Save Quiz"}
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
      {showqQuestion ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 overflow-x-hidden">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Question</div>
                <div className="group">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-text-100"
                  >
                    ...
                    <i className="ri-more-fill" />
                  </button>
                  <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <textarea
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  placeholder="Write a question ..."
                  className="text-text-100 text-sm outline-none focus:outline-primary-200 lg:text-base font-medium leading-7 mb-5 border w-full h-32 p-2 rounded-lg"
                />

                <div className="flex">
                  {trueFalseAnswer === "hidden" ? null : (
                    <>
                      {trueFalseAnswer === "true" ? null : (
                        <>
                          <button
                            onClick={() => {
                              setTrueFalseAnswer("false");
                              setMore(false);
                            }}
                            className="flex gap-2 items-center py-2 px-6 border-b border-b-gray-50 bg-rose-500/10 text-accent-200 hover:bg-rose-200"
                          >
                            <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                              False
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="fill-accent-200"
                            >
                              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                            </svg>
                          </button>
                          {trueFalseAnswer === "false" && (
                            <button
                              onClick={() => {
                                addQuestion();
                              }}
                              className="flex gap-2 ml-auto items-center py-2 px-6 border-b border-b-gray-50 bg-primary-100 text-primary-300 hover:bg-green-200"
                            >
                              <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                                Add Question
                              </span>
                            </button>
                          )}
                        </>
                      )}
                      {trueFalseAnswer === "false" ? null : (
                        <>
                          <button
                            onClick={() => {
                              setTrueFalseAnswer("true");
                              setMore(false);
                            }}
                            className="flex gap-2 items-center py-2 px-6 ml-2 border-b border-b-gray-50 bg-green-100 text-primary-300 hover:bg-green-200"
                          >
                            <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                              True
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="fill-primary-300"
                            >
                              <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                            </svg>
                          </button>
                          {trueFalseAnswer === "true" && (
                            <button
                              onClick={() => {
                                addQuestion();
                              }}
                              className="flex gap-2 ml-auto items-center py-2 px-6 border-b border-b-gray-50 bg-primary-100 text-primary-300 hover:bg-green-200"
                            >
                              <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                                Add Question
                              </span>
                            </button>
                          )}
                        </>
                      )}
                    </>
                  )}
                  {trueFalseAnswer === "idle" ? (
                    <button
                      onClick={() => {
                        setMore(true);
                        setTrueFalseAnswer("hidden");
                      }}
                      className="py-2 px-6 ml-2 border-b border-b-gray-50 hover:text-primary-200"
                    >
                      <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                        Add Answer
                      </span>
                    </button>
                  ) : null}
                </div>
                {more ? (
                  <ul className="py-5">
                    <button
                      onClick={() => {
                        setMore(false);
                        setTrueFalseAnswer("idle");
                      }}
                      className="flex gap-2 items-center p-1 ml-auto border-b border-b-gray-50 bg-rose-500/10 text-accent-200 hover:bg-rose-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-accent-200"
                      >
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                      </svg>
                    </button>
                    <li>
                      <p className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        correct Answer{" "}
                        <input
                          onChange={answerHandler}
                          name="correctAnswer"
                          value={answers.correctAnswer}
                          type="text"
                          className="min-w-96 p-2 border rounded-lg ml-3"
                        />
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer{" "}
                        <input
                          onChange={answerHandler}
                          name="wrongeAnswer1"
                          value={answers.wrongeAnswer1}
                          type="text"
                          className="min-w-96 p-2 border rounded-lg ml-3"
                        />
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer{" "}
                        <input
                          onChange={answerHandler}
                          name="wrongeAnswer2"
                          value={answers.wrongeAnswer2}
                          type="text"
                          className="min-w-96 p-2 border rounded-lg ml-3"
                        />
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer{" "}
                        <input
                          onChange={answerHandler}
                          name="wrongeAnswer3"
                          value={answers.wrongeAnswer3}
                          type="text"
                          className="min-w-96 p-2 border rounded-lg ml-3"
                        />
                      </p>
                    </li>
                    <button
                      onClick={() => {
                        addQuestion();
                      }}
                      className="flex gap-2 ml-auto items-center py-2 px-6 mt-4 border-b border-b-gray-50 bg-primary-100 text-primary-300 hover:bg-green-200"
                    >
                      <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                        Add Question
                      </span>
                    </button>
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">See Question</div>
                <div className="group">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-text-100"
                  >
                    ...
                    <i className="ri-more-fill" />
                  </button>
                  <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <p className="text-text-100 text-sm lg:text-base font-medium ml-2 leading-7 mb-5 overflow-x-hidden">
                  {question}
                </p>
                <div className="flex">
                  {trueFalseAnswer === "false" && (
                    <span className="flex gap-2 items-center py-2 px-6 border-b border-b-gray-50 bg-rose-500/10 text-accent-200 hover:bg-rose-200">
                      <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                        False
                      </span>
                    </span>
                  )}
                  {trueFalseAnswer === "true" && (
                    <span className="flex gap-2 items-center py-2 px-6 ml-2 border-b border-b-gray-50 bg-green-100 text-primary-300 hover:bg-green-200">
                      <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                        True
                      </span>
                    </span>
                  )}
                </div>
                {more ? (
                  <ul className="py-5">
                    <li>
                      <p className="flex items-center gap-5 text-[13px] py-1.5 px-4 text-primary-200 hover:text-text-100 hover:bg-gray-50">
                        correct Answer <p>{answers.correctAnswer}</p>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-5 text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer <p>{answers.wrongeAnswer1}</p>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-5 text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer <p>{answers.wrongeAnswer2}</p>
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-5 text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50">
                        wrong Answer <p>{answers.wrongeAnswer3}</p>
                      </p>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2 mb-6">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">Questions</div>
              <div className="group">
                <button
                  type="button"
                  className="dropdown-toggle text-gray-400 hover:text-text-100"
                >
                  ...
                  <i className="ri-more-fill" />
                </button>
                <ul className="absolute shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-text-100 hover:text-text-100 hover:bg-gray-50"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px]">
                <thead>
                  <tr>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                      Questions
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Answer
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                      Title
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((item) => (
                    <tr key={item.question}>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-bg-300"
                          >
                            <path d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v7z"></path>
                          </svg>
                          <a
                            href="#"
                            className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                          >
                            {item.question}
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-text-200">
                          {item.answer === "true" || item.answer === "false" ? (
                            item.answer
                          ) : (
                            <div className="flex gap-5 text-text-200">
                              <span className="p-1 bg-green-100">
                                {item.answer.correctAnswer}
                              </span>
                              <span className="p-1">
                                {item.answer.wrongeAnswer1}
                              </span>
                              <span className="p-1">
                                {item.answer.wrongeAnswer2}
                              </span>
                              <span className="p-1">
                                {item.answer.wrongeAnswer3}
                              </span>
                            </div>
                          )}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                          {title}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-primary-200 hover:bg-primary-300 text-white mr-4">
                          Edit
                        </button>
                        <button className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CreateQuizSection;
