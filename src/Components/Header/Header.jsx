import React from "react";
import { header } from "./Header.module.css";
import igniteLogo from "../../Assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={header}>
      <img src={igniteLogo} alt="Logo da trilha Ignite" />
    </header>
  );
}
