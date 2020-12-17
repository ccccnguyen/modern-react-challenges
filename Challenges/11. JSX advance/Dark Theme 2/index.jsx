import React from "react";
import clsx from "clsx";

import { render } from "react-dom";

function Navbar({ theme }) {
  let className = clsx({
    navbar: true,
    light: theme === "light",
    dark: theme === "dark",
  });
  return <h1 className={className}>Online supermarket</h1>;
}

const root = document.querySelector("#react-root");

render(
  <>
    <Navbar theme="light" />
    <Navbar theme="dark" />
  </>,
  root
);
