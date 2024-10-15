import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="w-full h-full font-ubuntu">
      <Header />
      <main
        // className="mt-10 p-3 h-[calc(100vh-160px)] overflow-y-auto"
        className="mt-10 mb-20 p-3 h-full overflow-y-auto"
      >
        {children}
      </main>
      <Menu />
    </div>
  );
}
