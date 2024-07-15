import DeleteQuestionSection from "@/components/templates/QuizInfo/DeleteQuestion";
import EditQuestionSection from "@/components/templates/QuizInfo/EditQuestionSection";
import quizModel from "@/models/quizModel";
import connectToDb from "@/utils/connectToDb";
import React from "react";

async function QuizInfo({ params }: { params: { id: string } }) {
  connectToDb();
  const quiz: QuizType & { _id: string } = await quizModel.findOne({
    _id: params.id,
  });

  return (
    <div className=" overflow-x-hidden p-6 text-text-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">21</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Students</div>
            </div>
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
          <a
            href="/gebruikers"
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">53</div>
                <div className="p-1 rounded bg-green-100 text-primary-300 text-[12px] font-semibold leading-none ml-2">
                  +30%
                </div>
              </div>
              <div className="text-sm font-medium text-gray-400">Quizes</div>
            </div>
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
          <a
            href="/dierenartsen"
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">
                {quiz.questions.length}
              </div>
              <div className="text-sm font-medium text-gray-400">Questions</div>
            </div>
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
          <a
            href=""
            className="text-accent-200 font-medium text-sm hover:text-red-800"
          >
            View
          </a>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2 mb-6">
        <h3 className="text-2xl font-semibold mb-3">{quiz.title}</h3>
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Questions : </div>
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
                  Quiz Title
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Answer
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Teacher
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {quiz?.questions?.map((item) => (
                <tr key={item._id}>
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
                      <p className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96">
                        {item.question}
                      </p>
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
                      Masoud Bahamin
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <EditQuestionSection
                      QuizId={JSON.parse(JSON.stringify(params.id))}
                      id={JSON.parse(JSON.stringify(item._id))}
                    />
                    <DeleteQuestionSection
                      QuizId={JSON.parse(JSON.stringify(params.id))}
                      id={JSON.parse(JSON.stringify(item._id))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Order Statistics</div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="rounded-md border border-dashed border-gray-200 p-4">
            <div className="flex items-center mb-0.5">
              <div className="text-xl font-semibold">10</div>
              <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
                80
              </span>
            </div>
            <span className="text-gray-400 text-sm">Active</span>
          </div>
          <div className="rounded-md border border-dashed border-gray-200 p-4">
            <div className="flex items-center mb-0.5">
              <div className="text-xl font-semibold">50</div>
              <span className="p-1 rounded text-[12px] font-semibold bg-green-100 text-primary-300 leading-none ml-1">
                +469
              </span>
            </div>
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <div className="rounded-md border border-dashed border-gray-200 p-4">
            <div className="flex items-center mb-0.5">
              <div className="text-xl font-semibold">4</div>
              <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-accent-200 leading-none ml-1">
                -130
              </span>
            </div>
            <span className="text-gray-400 text-sm">Canceled</span>
          </div>
        </div>
        <div>
          <canvas id="order-chart" />
        </div>
      </div>
    </div>
  );
}

export default QuizInfo;
