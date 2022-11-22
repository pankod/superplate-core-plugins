import React from "react";
import { Row, Col } from "antd";

import { Card } from "@components";
import data from "meta.json";

export const Cards: React.FC = () => {

  return (
<Row gutter={[16, 16]}>
{(data?.plugins ?? []).map((plugin) => (
    <Col span={8} key={plugin.name}  <% if (testing === 'testing-library') { %> data-testid="container" <% } %>>
        <Card title={plugin.name} bordered={false}>
            {plugin.description}
        </Card>
    </Col>
))}
</Row>
  );
};
