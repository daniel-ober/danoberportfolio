// pages/Home.js
import React, { useEffect, useState } from "react";
import "./Home.css";
import MakinHomeScene from "../components/MakinHomeScene";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-page">
      <MakinHomeScene variant={isMobile ? "mobile" : "desktop"} />
    </div>
  );
}