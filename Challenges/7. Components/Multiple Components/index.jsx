import React from "react";
import { render } from "react-dom";
import Button from "./Button.js";
import Link from "./Link.js";

function App() {
  return (
    <>
      <Button />
      <Button />
      <Link />
    </>
  );
}

// Sample usage (do not modify)
render(<App />, document.querySelector("#react-root"));
