import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { A } from "./index";

export default {
  title: "A",
  component: A,
  decorators: [withKnobs],
};

export const Basic = () => <A href="#">Go</A>;
