import React from "react";

export interface IA extends React.HTMLProps<HTMLAnchorElement> {}

export const A: React.FC<IA> = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};
