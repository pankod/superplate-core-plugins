import React from "react";

import { Logo } from "@components";
import { Container } from "./styled"

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};