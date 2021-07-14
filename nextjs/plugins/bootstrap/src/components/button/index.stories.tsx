import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const Basic = () => <Button>Submit</Button>;

export const DynamicVariables = () => {
  const label = text("label", "Submit");
  const variant = select(
    "variant",
    [
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
      "light",
      "dark",
      "link",
    ],
    "primary"
  );
  const size = select("size", ["sm", "lg"], undefined);

  return (
    <Button variant={variant} size={size}>
      {label}
    </Button>
  );
};
