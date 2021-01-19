import React, { CSSProperties } from "react";
import Image from "next/image";
import { Layout, Space } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const Footer: React.FC = () => {
  return (
    <Layout>
      <Layout.Footer className="footer">
        <Space direction="vertical" size="large">
          <Image src="/pankod.svg" alt="nextjs" width="140" height="28" />
          <Space align="center" size="middle">
            <a href="https://github.com/pankod" target="_blank">
              <GithubOutlined className="footer__icon" />
            </a>
            <a href="https://twitter.com/PankodDev" target="_blank">
              <TwitterOutlined className="footer__icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
              target="_blank"
            >
              <YoutubeOutlined className="footer__icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
              target="_blank"
            >
              <LinkedinOutlined className="footer__icon" />
            </a>
          </Space>
        </Space>
      </Layout.Footer>
    </Layout>
  );
};
