import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { StoryBookExample } from "./index";

export default {
  title: "Button",
  component: StoryBookExample,
} as Meta;

const Template: Story = (args) => (
  <StoryBookExample {...args}>{args.children}</StoryBookExample>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "PrimaryButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "SecondaryButton",
};
