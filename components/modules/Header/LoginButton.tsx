import { getUserInfoFromToken } from "@/utils/checkUser";
import Link from "next/link";

export default async function LoginButton() {
  const userInfo = await getUserInfoFromToken();

  return (
    <>
      {userInfo?.email ? (
        <Link
          href={"/dashboard"}
          className="rounded-full bg-primary-300 size-10 flex justify-center items-center"
        >
          {userInfo.email.slice(0, 2)}
        </Link>
      ) : (
        <>
          <Link
            href={"/signin"}
            className="hidden md:inline-block px-12 py-3 border border-white text-white hover:border-primary-300  bg-primary-300 hover:bg-transparent transition-colors duration-300"
          >
            Login
          </Link>
          <Link href={"/signin"} className="transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#ffffff"}
              fill={"none"}
            >
              <path
                d="M8 12H16M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </>
      )}
    </>
  );
}
