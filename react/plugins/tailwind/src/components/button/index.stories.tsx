import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Button } from "./index";

export default {
  title: "TailWindButton",
  decorators: [withKnobs],
};

export const Basic = () => <Button>Submit</Button>;

export const DynamicVariables = () => {
  const label = select("label", ["Submit", "Cancel"], "Docs");
  return <Button>{label}</Button>;
};
