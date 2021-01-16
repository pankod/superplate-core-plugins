import React from "react";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import { Container } from "./index";

export default {
    title: "Container",
    component: Container,
    decorators: [withKnobs],
};

export const Basic = () => {
    return (
        <Container>
            <div style={{ backgroundColor: "#ccc" }}>Container Content</div>
        </Container>
    );
};

export const DynamicVariables = () => {
    const fluid = boolean("fluid", false);

    return (
        <Container fluid={fluid}>
            <div
                style={{
                    backgroundColor: "#ccc",
                }}
            >
                Container Content
            </div>
        </Container>
    );
};
