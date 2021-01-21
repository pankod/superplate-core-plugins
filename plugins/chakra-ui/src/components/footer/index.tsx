import React, { CSSProperties } from "react";
<%_ if (!features.includes("svgr")) { _%>
import Image from "next/image";
<%_ } _%>
import { Space } from "antd";
import {
    GithubOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";

<%_ if (features.includes("svgr")) { _%>
import { PankodIcon } from "@components/icons";
<%_ } _%>

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
    };
    return (
        <div
            style={{
                backgroundColor: "#282c34",
                color: "#fff",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <Space direction="vertical" size="large">
                <%_ if (features.includes("svgr")) { _%>
                <PankodIcon color="white" width="140" height="28" />
                <%_ } else { _%>    
                <Image src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
                <%_ } _%>
                <Space align="center" size="middle">
                    <a
                        href="https://github.com/pankod"
                        target="_blank"
                        style={iconStyle}
                    >
                        <GithubOutlined />
                    </a>
                    <a
                        href="https://twitter.com/PankodDev"
                        target="_blank"
                        style={iconStyle}
                    >
                        <TwitterOutlined />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                        target="_blank"
                        style={iconStyle}
                    >
                        <YoutubeOutlined />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                        target="_blank"
                        style={iconStyle}
                    >
                        <LinkedinOutlined />
                    </a>
                </Space>
            </Space>
        </div>
    );
};
