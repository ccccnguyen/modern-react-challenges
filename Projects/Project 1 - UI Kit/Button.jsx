import React from "react";

export default function Button({ type, disabled, children }) {
  return (
    <button type={type} disabled={disabled} className="ui-button">
      {children}
    </button>
  );
}
