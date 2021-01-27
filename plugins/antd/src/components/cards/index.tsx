import React from "react";
import { Row, Col } from "antd";

import { Card } from "@components";
import data from "@public/meta.json";

export const Cards: React.FC = () => {

  return (
    <Row style={{ flex: 1}}>
      {(data?.plugins ?? []).map((plugin) => (
        <Col md={6} key={plugin.name} <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
          <Card title={plugin.name}>{plugin.description}</Card>
        </Col>
      ))}
    </Row>
  );
};
