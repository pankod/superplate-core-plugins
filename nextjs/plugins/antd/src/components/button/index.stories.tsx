import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Button } from "./index";

export default {
    title: "Button",
    component: Button,
    decorators: [withKnobs],
};

export const Basic = () => <Button type="primary">Submit</Button>;

export const DynamicVariables = () => {
    const label = text("label", "Submit");
    const type = select(
        "type",
        ["default", "primary", "ghost", "dashed", "link", "text"],
        "default",
    );
    const size = select("size", ["small", "middle", "large"], "middle");

    return (
        <Button type={type} size={size}>
            {label}
        </Button>
    );
};
