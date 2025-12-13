// src/components/Layout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

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