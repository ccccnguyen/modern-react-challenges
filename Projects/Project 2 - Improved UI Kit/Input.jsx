// Input.js
import React from "react";
import clsx from "clsx";

export default function Input(props) {
  let { type, className, ...rest } = props;
  let name = clsx("ui-textfield", className);
  //let type = props.type;
  if (!type) {
    type = "text";
  }
  return <input className={name} type={type} {...rest} />;
}
