import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { Col, Card, CardBody, CardText, CardTitle } from "./styled";

export default {
  title: "Cards",
  decorators: [withKnobs],
};

export const Basic = () => {
  return (
    <Col>
      <Card>
        <CardBody>
          <CardTitle>Styled Components</CardTitle>
          <CardText>Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
