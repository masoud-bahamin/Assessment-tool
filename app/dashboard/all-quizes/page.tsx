import MoreModal from "@/components/modules/Modal/MoreModal";
import quizModel from "@/models/quizModel";
import connectToDb from "@/utils/connectToDb";
import Link from "next/link";
import React from "react";

async function allQuizes() {
  connectToDb();
  const quizes: any[] = await quizModel.find({});

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
            <MoreModal />
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
            <MoreModal />
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
              <div className="text-2xl font-semibold mb-1">84</div>
              <div className="text-sm font-medium text-gray-400">Tests</div>
            </div>
            <MoreModal />
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
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Quizzes</div>
          <MoreModal />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[460px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Quiz Title
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Date
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Teacher
                </th>
              </tr>
            </thead>
            <tbody>
              {quizes?.map((item) => (
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
                      <Link
                        href={`/dashboard/quiz/${item._id}`}
                        className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate max-w-96"
                      >
                        {item.title}
                      </Link>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="text-[13px] font-medium text-primary-200">
                      {item.updatedAt.toString().slice(0, 15)}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-b-gray-50">
                    <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                      Masoud Bahamin
                    </span>
                  </td>
                </tr>
              ))}

              {/* <tr>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero, Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Libero, maxime ut laborum dolorum expedita quas?
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-accent-200">
                    False
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded font-medium text-[12px] leading-none">
                    Japan
                  </span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Order Statistics</div>
          <MoreModal />
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

export default allQuizes;
