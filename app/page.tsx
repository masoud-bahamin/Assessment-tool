import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import Hero from "@/components/templates/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Hero />
      <div className=" bg-white -mt-4">
        <div className="container py-20 flex flex-wrap md:flex-nowrap gap-20">
          <div>
            <h3 className="text-2xl sm:text-3xl mb-6">
              Quiz and Grade at the Speed of Learning
            </h3>
            <p className="leading-10 max-w-[500px] mb-6 text-xl">
              Immediate feedback is a vital part of the learning process.
              Socrative gives you just that for the classroom or office – an
              efficient way to monitor and evaluate learning that saves time for
              educators while delivering fun and engaging interactions for
              learners.
            </p>
            <div className="flex gap-10">
              <button className="px-5 py-2 border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white">
                Go to app
              </button>
              <button className="px-12 py-3 border border-white text-white hover:text-primary-300 hover:border-primary-300  bg-primary-300 hover:bg-transparent transition-colors duration-300">
                Contact our team
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={"/img/baner1.jpeg"}
              alt="baner"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="py-20 text-center">
        <div className="flex justify-center items-center gap-5 mb-6">
          <div className="border border-primary-300 h-[1px] w-10"></div>
          <h3 className="font-bold text-primary-300">WHAT WE DO</h3>
          <div className="border border-primary-300 h-[1px] w-10"></div>
        </div>
        <h3 className="text-2xl sm:text-4xl leading-[50px] max-w-[700px] mx-auto font-bold">
          Why Choosing Us Is TheBestOption For Your Education
        </h3>
      </div>
      <div className="bg-gray-200">
        <div className=" container py-20 grid gap-6 grid-cols-1 lg:grid-cols-4">
          <div className="bg-white p-8 shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-primary-300"
                width="3em"
                height="3em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 25c-2 0-4-.7-5.6-2l1.3-1.6c1.3 1 2.8 1.5 4.4 1.5c3.9 0 7-3.1 7-7c0-.3 0-.7-.1-1l2-.3V16c0 5-4 9-9 9zm-8.9-7.7C7 16.9 7 16.4 7 16c0-5 4-9 9-9c2 0 4 .7 5.6 2l-1.3 1.6C19.1 9.5 17.6 9 16 9c-3.9 0-7 3.1-7 7c0 .3 0 .7.1 1l-2 .3z"
                ></path>
                <circle cx="23" cy="27" r="1" fill="currentColor"></circle>
                <circle cx="9" cy="20" r="1" fill="currentColor"></circle>
                <circle cx="23" cy="12" r="1" fill="currentColor"></circle>
                <circle cx="16" cy="16" r="2" fill="currentColor"></circle>
                <circle cx="9" cy="5" r="1" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M16 30C8.3 30 2 23.7 2 16c0-3.7 1.5-7.3 4.1-9.9l1.4 1.4C5.2 9.8 4 12.8 4 16c0 6.6 5.4 12 12 12c1.4 0 2.8-.2 4.1-.7l.7 1.9c-1.5.5-3.2.8-4.8.8zm9.9-4.1l-1.4-1.4c2.3-2.3 3.5-5.3 3.5-8.5c0-6.6-5.4-12-12-12c-1.4 0-2.8.2-4.1.7l-.7-1.9c1.5-.5 3.2-.8 4.8-.8c7.7 0 14 6.3 14 14c0 3.7-1.5 7.3-4.1 9.9z"
                ></path>
              </svg>

              <h4 className=" font-semibold text-xl">
                Badge And Certification
              </h4>
            </div>

            <p className=" text-text-100">
              Habitant pellentesque morbi tristique senectus et netus et
              malesuada fames.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-primary-300"
                width="3em"
                height="3em"
                viewBox="0 0 32 32"
              >
                <circle cx="30" cy="20" r="1" fill="currentColor"></circle>
                <circle cx="2" cy="20" r="1" fill="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="M24 26a5.999 5.999 0 0 1-5.19-3.003l-1.733 1C18.46 26.387 21.04 28 24 28s5.54-1.613 6.923-4.003l-1.733-1A5.999 5.999 0 0 1 24 26Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M24 14a6.022 6.022 0 0 1 5.197 3l1.732-1.001C29.502 13.532 26.847 12 24 12s-5.502 1.532-6.938 4.015L13.197 23c-1.07 1.85-3.061 3-5.197 3s-4.127-1.15-5.197-3L1.07 24.001C2.498 26.468 5.153 28 8 28s5.502-1.532 6.938-4.015L18.803 17c1.07-1.85 3.061-3 5.197-3Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M8 14a5.999 5.999 0 0 1 5.19 3.003l1.733-1C13.54 13.613 10.96 12 8 12s-5.54 1.613-6.923 4.003l1.733 1A5.999 5.999 0 0 1 8 14zm8-8a9.97 9.97 0 0 1 7.068 2.932L24.48 7.52C22.308 5.346 19.308 4 16 4S9.692 5.346 7.519 7.519l1.413 1.413A9.97 9.97 0 0 1 16 6z"
                ></path>
              </svg>

              <h4 className=" font-semibold text-xl">
                Online Library Services
              </h4>
            </div>

            <p className=" text-text-100">
              Senectus et netus et malesuada fames ac turpis netus egestas
              vivamus tincidunt.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-primary-300"
                width="3em"
                height="3em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M3.6 22.5c-1-2-1.6-4.2-1.6-6.5C2 8.3 8.3 2 16 2v2C9.4 4 4 9.4 4 16c0 2 .5 3.8 1.4 5.5l-1.8 1zM28 16c0 6.6-5.4 12-12 12c-2.9 0-5.6-1-7.7-2.8l5.7-5.7l-1.4-1.5l-6.5 6.5c-.4.4-.4 1 0 1.4C8.7 28.5 12.3 30 16 30c7.7 0 14-6.3 14-14h-2z"
                ></path>
                <path
                  fill="currentColor"
                  d="M18 25c-.1 0-.3 0-.4-.1c-.3-.1-.6-.4-.6-.8l-.7-5l2-.3l.4 3.3l2.2-1.7V15c0-.3.1-.5.3-.7l3.2-3.2c.9-.9 1.5-2.2 1.5-3.5V6h-1.5c-1.3 0-2.6.5-3.5 1.5l-3.2 3.2c-.2.2-.4.3-.7.3h-5.5l-1.7 2.2l3.3.4l-.3 2l-5-.7c-.4 0-.7-.3-.8-.6s-.1-.7.1-1l3-4c.3-.2.6-.3.9-.3h5.6l3-3c1.3-1.3 3.1-2 4.9-2H26c1.1 0 2 .9 2 2v1.5c0 1.9-.7 3.6-2 4.9l-3 3V21c0 .3-.1.6-.4.8l-4 3c-.2.1-.4.2-.6.2z"
                ></path>
              </svg>

              <h4 className=" font-semibold text-xl">Organized Planner</h4>
            </div>

            <p className=" text-text-100">
              Turpis egestas vivamus tincidunt. Pellentesque habitant morbi
              vivamus tristique.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md">
            <div className="flex gap-2 items-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-primary-300"
                width="3em"
                height="3em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M25 2a11.01 11.01 0 0 0-10.245 7.024A6.994 6.994 0 0 0 9 6H6v3a7.008 7.008 0 0 0 7 7h1v9.05a9.923 9.923 0 0 0-6.071 2.879l1.414 1.414a8 8 0 0 1 12.309 1.213l1.661-1.113A9.98 9.98 0 0 0 16 25.062V16h1A11.012 11.012 0 0 0 28 5V2ZM13 14a5.006 5.006 0 0 1-5-5V8h1a5.005 5.005 0 0 1 5 5v1Zm13-9a9.01 9.01 0 0 1-9 9h-1v-1a9.01 9.01 0 0 1 9-9h1Z"
                ></path>
              </svg>

              <h4 className=" font-semibold text-xl">Meet Expert Teachers</h4>
            </div>

            <p className=" text-text-100">
              Zallentesque habitant morbi tristique senectus et netus et
              malesuada morbi.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 container flex flex-wrap md:flex-nowrap items-center gap-20">
        <div>
          <Image alt="" src={`/img/asset-27.webp`} width={1000} height={1000} />
        </div>
        <div>
          <div className="flex items-center gap-5 mb-6">
            <div className="border border-primary-300 h-[1px] w-10"></div>
            <h3 className="font-bold text-primary-300">STUDY AND RESEARCH</h3>
          </div>
          <h3 className="text-2xl sm:text-4xl leading-[50px] max-w-[700px] font-bold mb-6">
            Remarkable Research And OutstandingTeaching Expertise
          </h3>
          <p className=" font-light leading-8 text-text-100 mb-6">
            Velit laoreet id donec ultrices tincidunt arcu. Sodales ut eu sem
            integer vitae justo eget. Suspendisse ultrices gravida dictum fusce
            ut placerat orci nulla pellentesque.
          </p>
          <div className="text-primary-300">
            <div className="flex justify-between mb-3">
              <span>Education :</span>
              <span>90 %</span>
            </div>
            <div className="bg-gray-100 rounded-full mb-6">
              <div className="w-[90%] h-3 bg-primary-300 rounded-l-full"></div>
            </div>
            <div className="flex justify-between mb-3">
              <span>Motivation :</span>
              <span>80 %</span>
            </div>
            <div className="bg-gray-100 rounded-full mb-6">
              <div className="w-[80%] h-3 bg-primary-300 rounded-l-full"></div>
            </div>
            <div className="flex justify-between mb-3">
              <span>Coaching :</span>
              <span>85 %</span>
            </div>
            <div className="bg-gray-100 rounded-full">
              <div className="w-[85%] h-3 bg-primary-300 rounded-l-full"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
