import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Col } from "./index";
import { Row } from "../row/index";

export default {
    title: "Col",
    component: Col,
    decorators: [withKnobs],
};

export const Basic = () => (
    <Row>
        <Col md="12">
            <div style={{ backgroundColor: "#ccc" }}>Col</div>
        </Col>
    </Row>
);

export const DynamicVariables = () => {
    const colNumbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "auto",
    ];

    const xs = select<any>("xs", colNumbers, "auto");
    const sm = select<any>("sm", colNumbers, "auto");
    const md = select<any>("md", colNumbers, "auto");
    const lg = select<any>("lg", colNumbers, "auto");
    const xl = select<any>("xl", colNumbers, "auto");

    return (
        <Row>
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <div style={{ backgroundColor: "#ccc" }}>Col</div>
            </Col>
            <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <div style={{ backgroundColor: "#ccc" }}>Col</div>
            </Col>
        </Row>
    );
};
