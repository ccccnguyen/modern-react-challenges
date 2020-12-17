import React from "react";
import clsx from "clsx";

export default function Link(props) {
  const { children, className, ...rest } = props;
  let name = clsx("ui-link", className);
  return (
    <a
      className={name}
      // href={href}
      // disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
}
