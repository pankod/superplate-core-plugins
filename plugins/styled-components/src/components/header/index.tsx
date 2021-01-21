import React from "react";

import { Logo, Toggle } from "@components";
import { Container } from "./styled";

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Toggle />
    </Container>
  );
};