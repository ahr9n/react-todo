import * as React from "react";

export function Form(props) {
  const { onSubmit, children } = props;
  return (
    <form type="submit" onSubmit={onSubmit} {...props}>
      {children}
    </form>
  );
}
