import React from "react";
import { PT_Sans } from "next/font/google";
import Sidebar from "@/components/templates/Dashboard/sidebar";
import Header from "@/components/templates/Dashboard/Header";
import { redirect } from "next/navigation";
import { getUserInfoFromToken, isAdmin, isTeacher } from "@/utils/checkUser";

const ptSansFont = PT_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

async function Layaout({ children }: { children: React.ReactNode }) {
  const user = await getUserInfoFromToken();

  if (!user) {
    return redirect("/signin");
  }

  const admin = await isAdmin();
  const teacher = await isTeacher();

  return (
    <div className={`${ptSansFont.className} text-text-200`}>
      <Sidebar admin={admin} teacher={teacher} />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-bg-200 min-h-screen transition-all main">
        <Header username={user.email} role={user.role} />
        {children}
      </main>
    </div>
  );
}

export default Layaout;
