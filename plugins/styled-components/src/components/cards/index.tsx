import React from "react";

import { Row, Col, Container, Card, CardBody, CardText, CardTitle } from "./styled";

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
        <Container className="my-5">
            <Row>
                {data.map((item) => (
                    <Col md={4} key={item.title} className="mb-3">
                        <Card>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.content}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
