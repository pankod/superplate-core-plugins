import React from "react";

import { Button } from "@components";
import { Wrapper, Container, Text } from "./styled";

export const Banner: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h1>next-cli</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button>
          Docs
        </Button>
        <Text>Current Version: 0.0.1</Text>
      </Container>
    </Wrapper>
  );
};
