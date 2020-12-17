import React from "react";
import clsx from "clsx";

export default function Button(props) {
  const { children, type, className, disabled, ...rest } = props;
  let name = clsx("ui-button", className);
  return (
    <button className={name} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
