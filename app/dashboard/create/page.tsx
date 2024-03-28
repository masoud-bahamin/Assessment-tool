import CreateQuizSection from "@/components/templates/Create/CreateQuizSection";
import React from "react";

function CreateQuiz() {
  return (
    <div className=" overflow-x-hidden p-6 text-text-200">
      <CreateQuizSection />
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
                $80
              </span>
            </div>
            <span className="text-gray-400 text-sm">Active</span>
          </div>
          <div className="rounded-md border border-dashed border-gray-200 p-4">
            <div className="flex items-center mb-0.5">
              <div className="text-xl font-semibold">50</div>
              <span className="p-1 rounded text-[12px] font-semibold bg-green-100 text-primary-300 leading-none ml-1">
                +$469
              </span>
            </div>
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <div className="rounded-md border border-dashed border-gray-200 p-4">
            <div className="flex items-center mb-0.5">
              <div className="text-xl font-semibold">4</div>
              <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-accent-200 leading-none ml-1">
                -$130
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

export default CreateQuiz;
