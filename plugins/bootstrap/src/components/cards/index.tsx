import React from "react";

import { Card, Container, Row, Col } from "@components";
import { ICard } from "@components/card";

export const Cards: React.FC = () => {
    const data: { title: string; content: string }[] = [
        {
            title: "Redux",
            content:
                "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
    ];

    return (
        <Container>
            <Row>
                {data.map((item) => (
                    <Col md={3}>
                        <Card
                            key={item.title}
                            title={item.title}
                            content={item.content}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
