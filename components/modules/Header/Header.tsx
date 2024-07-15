import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import LoginButton from "./LoginButton";

async function Header() {
  return (
    <div className="bg-dark">
      <div className="container flex items-center justify-between  text-white sticky top-0">
        <div className="border-l border-l-white xl:w-80">
          <Image
            src="/img/logo.png"
            alt="bahamin"
            width={160}
            height={80}
            quality={100}
            className="mt-4"
          />
        </div>
        <Navbar />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;
