import React from "react";

import data from "@public/meta.json";
import { Row, Col, Container, Card, CardBody, CardText, CardTitle } from "./styled";

export const Cards: React.FC = () => {

    return (
        <Container className="my-5">
            <Row>
                {(data?.plugins ?? []).map((plugin) => (
                    <Col md={4} key={plugin.title} className="mb-3">
                        <Card>
                            <CardBody>
                                <CardTitle>{plugin.title}</CardTitle>
                                <CardText>{plugin.content}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
