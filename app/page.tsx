import Header from "@/components/modules/Header/Header";
import Hero from "@/components/templates/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <div className=" bg-white -mt-4">
        <div className="container py-20 flex flex-wrap md:flex-nowrap gap-20">
          <div>
            <h3 className="text-3xl mb-6">
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
              <button className="px-5 py-2 border rounded-lg border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white">
                Go to app
              </button>
              <button className="px-5 py-2 border bg-primary-300 text-white rounded-lg hover:bg-white hover:text-primary-300">
                Contact our team
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={"/img/baner1.png"}
              alt="baner"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <h2>Quiz</h2>
    </div>
  );
}
