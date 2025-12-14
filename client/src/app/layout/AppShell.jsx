import React from "react";
import BackgroundVideo from "../../components/media/BackgroundVideo";
import NavBar from "../../components/nav/NavBar";
import "./AppShell.css";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <BackgroundVideo src="/media/app-bg-video2.mp4" />
      <NavBar />
      <main className="app-content">{children}</main>
    </div>
  );
}
