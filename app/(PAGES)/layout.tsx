import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
