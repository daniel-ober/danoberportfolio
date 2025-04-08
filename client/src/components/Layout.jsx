// components/Layout.js
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <>
      <NavBar />
      <div className="layout-content">
        {/* Static portrait image (only one instance) */}
        {(isHome || isAbout) && (
          <div className="shared-portrait-wrapper">
  <img src="/danober-portfolio.png" alt="Dan Ober" className="shared-portrait" />
</div>
        )}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}