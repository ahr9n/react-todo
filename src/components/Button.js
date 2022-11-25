import * as React from "react";

export function Button(props) {
  const { type, onClick, children } = props;
  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
