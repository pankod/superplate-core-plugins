import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Card
    title="Card Title"
    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  />
);
