import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <Image
        src="/img/bannerpic.jpeg"
        alt="baner"
        className="-z-10"
        layout="fill"
        objectFit="cover"
      />
      <div className="text-white flex flex-col items-center justify-center h-[91vh] bg-[rgba(10,10,10,.6)]">
        <p className="text-6xl text-gray-100 mb-6">QUIZ APP</p>
        <p className="max-w-xl leading-8 mb-6">
          Effortlessly assess and engage your students while visualizing
          learning progress in real-time with instant results.
        </p>
        <button className="px-5 py-2 border border-white rounded-lg hover:border-primary-300 hover:text-primary-300">
          Get Free
        </button>
      </div>
    </div>
  );
}

export default Hero;
