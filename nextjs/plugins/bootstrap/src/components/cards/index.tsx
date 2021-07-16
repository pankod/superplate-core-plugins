import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

import data from "@public/meta.json";

export const Cards: React.FC = () => {

  return (
    <Container className="my-5 flex-grow-1">
      <Row>
        {(data?.plugins ?? []).map((plugin) => (
          <Col md={4} key={plugin.name} className="mb-3" <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
            <Card className="border-none">
              <Card.Body>
                <Card.Title>{plugin.name}</Card.Title>
                <Card.Text>{plugin.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
