import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="px-10 flex items-center justify-between bg-slate-700 text-white sticky top-0">
      <div>
        <Image
          src="/img/logo.png"
          alt="bahamin"
          width={200}
          height={80}
          quality={100}
        />
      </div>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>PRICING</li>
        <li>BLOG</li>
        <li>
          <Link href={"/quiz"}>QUIZ</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>DASHBOARD</Link>
        </li>
      </ul>
      <div className="flex gap-5 h-fit">
        <button className="px-4 py-2 border rounded-lg border-white">
          Contact Sales
        </button>
        <Link href={"/signin"} className="px-4 py-2 bg-primary-300 rounded-lg ">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
