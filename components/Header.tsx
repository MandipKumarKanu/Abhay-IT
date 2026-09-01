import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      <TopBar />
      <NavBar />
    </header>
  );
}
