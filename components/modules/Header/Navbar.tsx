"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div
        className={` ${
          showNav ? " top-0 left-0 " : "-top-[500px] left-0"
        } w-full absolute md:static p-5 md:p-0 md:w-3/4 flex flex-col md:flex-row md:items-center md:justify-between bg-dark transition-all duration-500`}
      >
        <div className="flex justify-end md:hidden">
          <svg
            onClick={() => setShowNav(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className="flex flex-col md:flex-row gap-y-6 md:gap-10">
          <li
            onClick={() => setShowNav(false)}
            className="hover:text-primary-100 active:text-primary-100"
          >
            <Link href={"/"}>HOME</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className="hover:text-primary-100 active:text-primary-100"
          >
            <Link href={"/"}>PRICING</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className="hover:text-primary-100 active:text-primary-100"
          >
            <Link href={"/"}>BLOG</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className="hover:text-primary-100 active:text-primary-100"
          >
            <Link href={"/quiz"}>QUIZ</Link>
          </li>
          <li
            onClick={() => setShowNav(false)}
            className="hover:text-primary-100 active:text-primary-100"
          >
            <Link href={"/dashboard"}>DASHBOARD</Link>
          </li>
        </ul>
        <div className="hidden xl:flex gap-10 items-center h-fit mt-6 md:mt-0">
          <svg
            className=" cursor-pointer hover:text-primary-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className=" cursor-pointer hover:text-primary-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#ffffff"}
            fill={"none"}
          >
            <path
              d="M11.0215 6.78662V19.7866"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11 19.5C10.7777 19.5 10.3235 19.2579 9.41526 18.7738C8.4921 18.2818 7.2167 17.7922 5.5825 17.4849C3.74929 17.1401 2.83268 16.9678 2.41634 16.4588C2 15.9499 2 15.1347 2 13.5044V7.09655C2 5.31353 2 4.42202 2.6487 3.87302C3.29741 3.32401 4.05911 3.46725 5.5825 3.75372C8.58958 4.3192 10.3818 5.50205 11 6.18114C11.6182 5.50205 13.4104 4.3192 16.4175 3.75372C17.9409 3.46725 18.7026 3.32401 19.3513 3.87302C20 4.42202 20 5.31353 20 7.09655V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.8638 12.9393L21.5589 13.6317C22.147 14.2174 22.147 15.1672 21.5589 15.7529L17.9171 19.4485C17.6306 19.7338 17.2642 19.9262 16.8659 20.0003L14.6088 20.4883C14.2524 20.5653 13.9351 20.2502 14.0114 19.895L14.4919 17.6598C14.5663 17.2631 14.7594 16.8981 15.0459 16.6128L18.734 12.9393C19.3222 12.3536 20.2757 12.3536 20.8638 12.9393Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <svg
        className="md:hidden"
        onClick={() => setShowNav(true)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={"#ffffff"}
        fill={"none"}
      >
        <path
          d="M4 5L20 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12L20 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19L20 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
