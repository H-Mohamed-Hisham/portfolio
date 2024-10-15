import React from "react";

// Components
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full font-ubuntu">
      <Header />
      <main className="mt-10 p-3 h-[calc(100vh-130px)] overflow-y-auto">
        {children}
      </main>
      <Menu />
    </div>
  );
}
