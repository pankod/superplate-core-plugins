import React from "react";
import { Row, Col, Card, Button, Space } from "antd";

export const AntdExample: React.FC = () => {
    return (
        <Space
            direction="vertical"
            style={{ height: 500, justifyContent: "center" }}
        >
            <Row gutter={[16, 16]} justify="center">
                <Col span={8}>
                    <Card title="AntDesign Example">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab, officiis dolor eaque optio quam deserunt
                        nesciunt tempore iste unde cum eius explicabo debitis
                        non nostrum incidunt natus. Molestiae, veritatis quo.
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="AntDesign Example">
                        A cupiditate quae quidem accusamus, sint dolores
                        distinctio doloribus earum culpa quas facilis
                        repellendus soluta illo provident eaque inventore
                        sapiente molestias atque dolor ipsam autem eveniet
                        dolorem. Quibusdam, nostrum cupiditate.
                    </Card>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <Button
                        type="primary"
                        target="_blank"
                        href="https://ant.design/"
                        style={{ backgroundColor: "green" }}
                    >
                        Go To Documentation
                    </Button>
                </Col>
            </Row>
        </Space>
    );
};
