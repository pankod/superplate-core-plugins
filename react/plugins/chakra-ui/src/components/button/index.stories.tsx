import React from "react";
import { withKnobs, text, select } from "storybook/addon-knobs";

import { Button } from "./index";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};

export const Basic = () => <Button variant="solid">Submit</Button>;

export const DynamicVariables = () => {
    const label = text("label", "Submit");
    const variant = select(
        "variant",
        ["solid", "ghost", "outline", "link", "unstyled"],
        "solid",
    );
    const size = select("size", ["sm", "md", "lg", "xs"], "md");
    const colorScheme = select("colorScheme", ["blue", "teal"], "teal");

    return (
        <Button variant={variant} size={size} colorScheme={colorScheme}>
            {label}
        </Button>
    );
};
