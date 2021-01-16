import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Row } from "./index";
import { Col } from "../col/index";

export default {
    title: "Row",
    component: Row,
    decorators: [withKnobs],
};

export const Basic = () => {
    return (
        <Row>
            <Col sm={6}>
                <div style={{ backgroundColor: "#ccc" }}>col-sm-6</div>
            </Col>
            <Col sm={6}>
                <div style={{ backgroundColor: "#ccc" }}>col-sm-6</div>
            </Col>
        </Row>
    );
};
