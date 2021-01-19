import React, { CSSProperties } from "react";
import { Layout } from "antd";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <Layout.Content className="main">
      <h1 className="main__title">next-cli</h1>
      <p className="main__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Button type="primary" size="large">
        Docs
      </Button>
    </Layout.Content>
  );
};
