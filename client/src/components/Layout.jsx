import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main className="layout__main">
        <div className="layout__container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
