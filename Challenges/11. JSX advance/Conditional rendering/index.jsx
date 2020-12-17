import React from "react";
import { render } from "react-dom";

function WelcomeUser(props) {
  if (!props.user) {
    return null;
  }

  return <h1>Welcome {props.user.name}</h1>;
}

const user = {
  id: 1,
  name: "Sam Blue",
};
const root = document.querySelector("#react-root");

render(
  <>
    <WelcomeUser user={user} />
    <WelcomeUser />
  </>,
  root
);
