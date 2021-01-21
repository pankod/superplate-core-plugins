import React from "react";

import { Button } from "@components";
import { Wrapper, Container } from "./styled";

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>next-cli</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button>Docs</Button>
      </Container>
    </Wrapper>
  );
};
