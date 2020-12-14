import React from "react";
import { render } from "react-dom";

render(
  <p className="selected" tabIndex="2">
    Hello World
  </p>,
  document.querySelector("#react-root")
);
