import React from "react";
import Image from "next/image";
import { Space } from "antd";
import {
    GithubOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";

<%_ if (css_features === "styled-components") { _%>
// TODO: import styled file
<%_ } else { _%>
import styles from "./index.module.<%= css_features %>";
<%_ } _%>

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <Space direction="vertical" size="large">
                <Image
                    src="/pankod.svg"
                    alt="nextjs"
                    width="140"
                    height="28"
                />
                <Space align="center" size="middle">
                    <a href="https://github.com/pankod" target="_blank" className={styles.footer__icon}>
                        <GithubOutlined />
                    </a>
                    <a href="https://twitter.com/PankodDev" target="_blank" className={styles.footer__icon}>
                        <TwitterOutlined />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                        target="_blank"
                        className={styles.footer__icon}
                    >
                        <YoutubeOutlined />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                        target="_blank"
                        className={styles.footer__icon}
                    >
                        <LinkedinOutlined />
                    </a>
                </Space>
            </Space>
        </div>
    );
};
