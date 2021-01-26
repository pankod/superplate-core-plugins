import React from "react";

import { Logo, Toggle } from "@components";
import { Wrapper, Container } from "./styled";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
        <Logo />
        <Toggle />
      </Container>
    </Wrapper>
  );
};