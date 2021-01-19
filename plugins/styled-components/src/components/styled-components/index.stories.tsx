import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { StyledComponentsExample } from "./index";

export default {
  title: "StyledComponents",
  component: StyledComponentsExample,
  decorators: [withKnobs],
};

export const Basic = () => <StyledComponentsExample />;