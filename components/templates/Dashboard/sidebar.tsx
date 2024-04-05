"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar({ admin, teacher }: { admin: boolean; teacher: boolean }) {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setShowSide(true)}
        type="button"
        className={`fixed left-5 top-5 z-40 text-lg font-semibold sidebar-toggle`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className=" fill-inherit"
        >
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </button>
      <div
        className={` ${
          showSide ? "left-0" : "-left-80"
        } md:left-0 fixed top-0 w-64 h-full bg-bg-100 p-4 z-50 transition-all duration-500`}
      >
        <Link href="/" className="flex items-center border-b border-b-gray-800">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={200}
            height={80}
            quality={100}
            priority={true}
          />
        </Link>
        <ul className="mt-4">
          {admin ? (
            <>
              <span className="text-bg-300 font-semibold">ADMIN</span>
              <li className="mb-1 group">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
                    />
                  </svg>
                  <span className="text-sm">Dashboard</span>
                </Link>
              </li>
              <li className="mb-1 group">
                <Link
                  href="/dashboard/students"
                  className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
                    />
                  </svg>
                  <span className="text-sm">Students</span>
                  <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
                </Link>
                <ul className="pl-2 mt-2 group-[.selected]:block">
                  <li className="mb-4">
                    <Link
                      href="/dashboard"
                      className=" text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                    >
                      Create
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/dashboard/edit-user"
                      className=" text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                    >
                      Edit
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 group">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 12h3l3-9l6 18l3-9h3"
                    />
                  </svg>
                  <span className="text-sm">Activities</span>
                </Link>
              </li>
            </>
          ) : null}
          {teacher || admin ? (
            <>
              <span className="text-bg-300 font-semibold">QUIZ</span>
              <li className="mb-1 group">
                <Link
                  href="/dashboard/all-quizes"
                  className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 14h8m-8-4h2m-2 8h4M10 3H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3.5M10 3V1m0 2v2"
                    />
                  </svg>
                  <span className="text-sm">All</span>
                  <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
                </Link>
                <ul className="pl-2 mt-2 group-[.selected]:block">
                  <li className="mb-4">
                    <Link
                      href="/dashboard/create"
                      className=" text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                    >
                      Create
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      href="/dashboard/edit"
                      className=" text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                    >
                      Edit
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 group">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 6h10M7 9h10m-8 8h6"
                      />
                      <path d="M3 12h-.4a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-8.8a.6.6 0 0 0-.6-.6H21M3 12V2.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V12M3 12h18" />
                    </g>
                  </svg>
                  <span className="text-sm">Archive</span>
                </Link>
              </li>
            </>
          ) : null}
          <span className="text-bg-300 font-semibold">PERSONAL</span>
          <li className="mb-1 group">
            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2 4v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h3"
                />
              </svg>
              <span className="text-sm">Notifications</span>
              <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-accent-200 bg-rose-100 rounded-full">
                5
              </span>
            </Link>
          </li>
          <li className="mb-1 group">
            <Link
              href="/dashboard/message"
              className="flex items-center gap-1 p-2 hover:bg-text-200 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-text-200 group-[.selected]:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path strokeLinejoin="round" d="m7 8l5 3l5-3" />
                  <path d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.857" />
                  <path
                    strokeLinejoin="round"
                    d="M13 17.111h6.3c3.6 0 3.6 4.889 0 4.889M13 17.111L16.15 14M13 17.111l3.15 3.111"
                  />
                </g>
              </svg>
              <span className="text-sm">Messages</span>
              <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-primary-300 bg-green-100 rounded-full">
                2 New
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {showSide && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden"
          onClick={() => setShowSide(false)}
        />
      )}
    </div>
  );
}

export default Sidebar;
