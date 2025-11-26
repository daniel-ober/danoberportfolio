import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about"; // kept in case you still use it

  // Disable body scroll on home, enable elsewhere
  useEffect(() => {
    if (isHome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHome]);

  return (
    <>
      <NavBar />
      <div
        className={
          isHome ? "layout-content layout-content--home" : "layout-content"
        }
      >
        <main
          className={isHome ? "layout-main layout-main--home" : "layout-main"}
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}