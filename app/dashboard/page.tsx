import MoreModal from "@/components/modules/Modal/MoreModal";
import EditUserForm from "@/components/templates/Dashboard/EditUserForm";
import quizModel from "@/models/quizModel";
import resultModel from "@/models/TestResult";
import userModel from "@/models/userModel";
import { getUserInfoFromToken, isAdmin, isTeacher } from "@/utils/checkUser";
import connectToDb from "@/utils/connectToDb";

import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Dashboard() {
  connectToDb();
  const quizes: any[] = await quizModel.find({});
  const users: any[] = await userModel.find({}, "-password -__v");
  const results = await resultModel
    .find({})
    .populate("userId")
    .populate("quizId");

  const admin = await isAdmin();
  const teacher = await isTeacher();
  const userInfo: userType & {
    TestsResult: [{ result: number }];
  } = await getUserInfoFromToken();

  return (
    <div className="p-6 text-text-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">2</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Users</div>
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
                <div className="text-2xl font-semibold">
                  {userInfo.TestsResult?.length || 0}
                </div>
                <div className="p-1 rounded bg-green-100 text-primary-300 text-[12px] font-semibold leading-none ml-2">
                  +{Math.floor((userInfo.TestsResult[0]?.result || 0) * 100)}%
                </div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Completed Quiz
              </div>
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
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm font-medium text-gray-400">Blogs</div>
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
      {admin ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-text-200 w-full shadow-lg rounded max-h-80 overflow-y-auto">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                    Users
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-text-100 text-gray-500 dark:text-gray-100 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        NAME
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-text-100 text-gray-500 dark:text-gray-100 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        DATE
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-text-100 text-gray-500 dark:text-gray-100 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px" />
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((user, index) => (
                      <tr
                        key={user._id}
                        className="text-gray-700 dark:text-gray-100"
                      >
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {user.email}
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {user.updatedAt.toString().slice(0, 10)}
                        </td>
                        {index % 3 === 0 ? (
                          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">70%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                  <div
                                    style={{ width: "70%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        ) : index % 3 === 1 ? (
                          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">60%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-100">
                                  <div
                                    style={{ width: "60%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent-200"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        ) : (
                          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2">45%</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-100">
                                  <div
                                    style={{ width: "45%" }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">Activities</div>
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
            <div className="overflow-hidden">
              <table className="w-full min-w-[540px]">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="group">
                        <button
                          type="button"
                          className="dropdown-toggle text-gray-400 hover:text-text-100 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                        >
                          <i className="ri-more-2-fill" />
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
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="group">
                        <button
                          type="button"
                          className="dropdown-toggle text-gray-400 hover:text-text-100 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"
                        >
                          <i className="ri-more-2-fill" />
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
      {teacher || admin ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
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
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">Learnings</div>
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
                      Service
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                      Score
                    </th>
                    <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result: any) => (
                    <tr key={result._id}>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/32x32"
                            alt=""
                            className="w-8 h-8 rounded object-cover block"
                          />
                          <a
                            href="#"
                            className="text-text-100 text-sm font-medium hover:text-primary-300 ml-2 truncate"
                          >
                            {result.userId.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        {Number(result.result) > 2 / 5 ? (
                          <span className="text-[13px] font-medium text-primary-200">
                            {Math.round(result.result * 10)} / 10
                          </span>
                        ) : (
                          <span className="text-[13px] font-medium text-accent-200">
                            {Math.round(result.result * 10)} / 10
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        {Number(result.result) > 2 / 5 ? (
                          <span className="inline-block p-1 rounded bg-green-100 text-primary-300 font-medium text-[12px] leading-none">
                            Success
                          </span>
                        ) : (
                          <span className="inline-block p-1 rounded bg-rose-500/10 text-accent-200 font-medium text-[12px] leading-none">
                            Unsuccess
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-3">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Student Details</div>
            <MoreModal />
          </div>
          <div className="overflow-x-auto grid grid-cols-1 lg:grid-cols-8 gap-6">
            <div className="lg:col-span-2">
              <p className="text-sm mb-2 text-text-200">Photo</p>
              <Image
                alt="acount image"
                width={100}
                height={100}
                src={"/img/user.jpg"}
              />
              <div className="flex gap-4 mt-4 text-sm">
                <input
                  className="sr-only"
                  type="file"
                  name="file-input"
                  id="file-input"
                  accept=".png , .jpg , .jpeg"
                />
                <label
                  htmlFor="file-input"
                  className="py-2 px-4 rounded-lg bg-primary-300 text-white hover:bg-primary-200 cursor-pointer"
                >
                  Choose File
                </label>
                <button className="py-2 px-4 rounded-lg bg-rose-200 text-red-700 hover:bg-rose-300">
                  remove
                </button>
              </div>
            </div>
            <EditUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
