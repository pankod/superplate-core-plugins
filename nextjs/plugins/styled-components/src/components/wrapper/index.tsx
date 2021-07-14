import React from "react";
import { Container } from "./styled";

export const Wrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>
};