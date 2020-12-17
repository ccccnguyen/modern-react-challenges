import React from "react";

export default function Container({ className, children, ...rest }) {
  return (
    <div className={`ui-container ${className}`} {...rest}>
      {children}
    </div>
  );
}
