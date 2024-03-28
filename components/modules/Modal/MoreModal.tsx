"use client";

import Link from "next/link";
import { useState } from "react";

function MoreModal() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="relative">
      <div
        className={` ${
          isShow ? "" : "hidden"
        } fixed w-screen h-screen top-0 left-0 bg-[rgba(200,200,200,.1)] z-10`}
        onClick={() => setIsShow(false)}
      ></div>
      <button
        onClick={() => setIsShow(true)}
        type="button"
        className="text-gray-400 hover:text-text-100"
      >
        ...
      </button>
      <ul
        className={`${
          isShow ? "block" : "hidden"
        } absolute right-2 top-2 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-fit max-w-[180px]`}
      >
        <li>
          <Link
            href="/dashboard"
            className="flex items-center text-[13px] py-1.5 px-4 min-w-32 text-text-100 hover:text-text-100 hover:bg-gray-50"
          >
            Profile
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-[13px] py-1.5 px-4 min-w-32 text-text-100 hover:text-text-100 hover:bg-gray-50"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center text-[13px] py-1.5 px-4 min-w-32 text-text-100 hover:text-text-100 hover:bg-gray-50"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MoreModal;
