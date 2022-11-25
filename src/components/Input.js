import * as React from "react";

export function Input(props) {
  const { placeholder, onChange, value } = props;
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}
