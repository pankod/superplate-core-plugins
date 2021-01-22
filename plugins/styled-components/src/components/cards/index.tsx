import React from "react";

import data from "@public/meta.json";
import { Row, Col, Container, Card, CardBody, CardText, CardTitle } from "./styled";

export const Cards: React.FC = () => {

    return (
        <Container className="my-5">
            <Row>
                {(data?.plugins ?? []).map((plugin) => (
                    <Col md={4} key={plugin.name} className="mb-3">
                        <Card>
                            <CardBody>
                                <CardTitle>{plugin.name}</CardTitle>
                                <CardText>{plugin.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
