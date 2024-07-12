import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <Image
        src="/img/hero-bg.jpg"
        alt="baner"
        className="-z-10"
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full text-white bg-gradient-to-r from-[rgba(41,45,56,.95)] to-[rgba(63,69,86,.9)]  ">
        <div className="container flex flex-wrap md:flex-nowrap items-center gap-y-10 gap-x-5 xl:gap-10 py-16">
          <div>
            <p className="text-3xl md:text-5xl md:leading-[60px] text-gray-100 mb-6 font-light">
              Courses & Exams & QUIZ APP
            </p>
            <p className="max-w-xl leading-8 mb-6 font-light">
              Effortlessly assess and engage your students while visualizing
              learning progress in real-time with instant results.
            </p>
            <button className="px-12 py-3 border border-white  hover:border-primary-300  bg-primary-300 hover:bg-transparent transition-colors duration-300">
              Get Free
            </button>
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="grid grid-cols-2 gap-2 ml-auto">
              <div className="size-[100px]">
                <p className="text-2xl sm:text-3xl w-64 mb-2 -ml-24 sm:-ml-36 font-light">
                  Available Quizes
                </p>
                <p className="text-3xl sm:text-4xl w-48 -ml-24 sm:-ml-36">24</p>
              </div>
              <div className="size-[100px]">
                <Image
                  src={"/img/hero6.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div className="size-[100px]">
                <Image
                  src={"/img/hero5.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div className="size-[100px]">
                <Image
                  src={"/img/hero7.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
            </div>
            <div className="w-fit grid grid-cols-2 gap-2">
              <div className="size-[100px]">
                <Image
                  src={"/img/hero1.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div className="size-[100px]">
                <p className="text-3xl w-64 mb-2 pl-5 font-light">
                  Uniqe Quizes
                </p>
                <p className="text-4xl w-48 pl-5">14</p>
              </div>
              <div className="size-[100px]">
                <Image
                  src={"/img/hero2.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div className="size-[100px]">
                <Image
                  src={"/img/hero3.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
