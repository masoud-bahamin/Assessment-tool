import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header({
  username,
  role,
}: {
  username: string;
  role: "ADMIN" | "USER" | "TEACHER";
}) {
  return (
    <div className="py-2 px-6 bg-bg-100 flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <ul className="ml-auto flex items-center">
        <li className="mr-1 group">
          <button
            type="button"
            className="dropdown-toggle text-text-100 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z"
              />
            </svg>
          </button>
          <div className="absolute right-20 hidden group-hover:block shadow-md shadow-black/5 z-30  max-w-xs w-full bg-white rounded-md border border-gray-100">
            <form action="" className="p-4 border-b border-b-gray-100">
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                  placeholder="Search..."
                />

                <svg
                  className=" absolute top-1/2 left-4 -translate-y-1/2 "
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
                    d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z"
                  />
                </svg>
              </div>
            </form>
          </div>
        </li>
        <li className="group">
          <button
            type="button"
            className="dropdown-toggle text-text-100 mr-4 w-8 h-8 rounded flex items-center justify-center  hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>
          <div className="absolute right-10 shadow-md shadow-black/5 z-30 hidden group-hover:block max-w-xs w-full bg-white rounded-md border border-gray-100">
            <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
              <button
                type="button"
                data-tab="notification"
                data-tab-page="notifications"
                className="text-text-100 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active"
              >
                Notifications
              </button>
              <button
                type="button"
                data-tab="notification"
                data-tab-page="messages"
                className="text-text-100 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1"
              >
                Messages
              </button>
            </div>
            <div className="my-2">
              <ul
                className="max-h-64 overflow-y-auto"
                data-tab-for="notification"
                data-page="notifications"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-text-200">
                        New order
                      </div>
                      <div className="text-[11px] text-text-100">
                        from a user
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul
                className="max-h-64 overflow-y-auto "
                data-tab-for="notification"
                data-page="messages"
              >
                <li>
                  <Link
                    href="/dashboard"
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-text-200">
                        John Doe
                      </div>
                      <div className="text-[11px] text-text-100">
                        Hello there!
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-text-200">
                        John Doe
                      </div>
                      <div className="text-[11px] text-text-100">
                        Hello there!
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                  >
                    <img
                      src="https://placehold.co/32x32"
                      alt=""
                      className="w-8 h-8 rounded block object-cover align-middle"
                    />
                    <div className="ml-2">
                      <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-text-200">
                        John Doe
                      </div>
                      <div className="text-[11px] text-text-100">
                        Hello there!
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <button
          className=" text-text-100 mr-4 w-8 h-8 hover:text-gray-600"
          id="fullscreen-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"
            />
          </svg>
        </button>
        <li className="group ml-3">
          <button type="button" className="dropdown-toggle flex items-center">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <Image
                  width={50}
                  height={50}
                  quality={100}
                  className="w-8 h-8 rounded-full"
                  src="/img/u1.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-primary-100 border-2 border-white rounded-full animate-ping" />
                <div className="top-0 left-7 absolute w-3 h-3 bg-primary-100 border-2 border-white rounded-full" />
              </div>
            </div>
            <div className="p-2 hidden md:block text-left">
              <h2 className="text-sm font-semibold text-text-200">
                {username || "Masoud Bahamin"}
              </h2>
              <p className="text-xs text-text-100">{role}</p>
            </div>
          </button>
          <ul className="absolute right-10 shadow-md shadow-black/5 z-30 hidden group-hover:block py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-primary-200 hover:bg-gray-50"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-primary-200 hover:bg-gray-50"
              >
                Settings
              </Link>
            </li>
            <li>
              <form method="POST" action="">
                <Link
                  href="/dashboard"
                  role="menuitem"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-primary-200 hover:bg-gray-50 cursor-pointer"
                >
                  Log Out
                </Link>
              </form>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;
