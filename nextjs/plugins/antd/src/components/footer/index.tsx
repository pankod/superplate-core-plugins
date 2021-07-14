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
                <PankodIcon <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> color="white" width="140" height="28" />
                <%_ } else { _%>    
                <Image <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %> src="/icons/pankod-icon.svg" alt="pankod" width="140" height="28" />
                <%_ } _%>
                <Space align="center" size="middle" <% if (testing === 'testing-library') { %> data-testid="icons-container" <% } %> >
                    <a
                        href="https://github.com/pankod"
                        target="_blank"
                        <%_ if (testing === 'testing-library') { _%>   
                        data-testid="pankod-logo"
                        <%_ } _%>
                        style={iconStyle}
                    >
                        <GithubOutlined <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %>/>
                    </a>
                    <a
                        href="https://twitter.com/PankodDev"
                        target="_blank"
                        style={iconStyle}
                    >
                        <TwitterOutlined <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %>/>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
                        target="_blank"
                        style={iconStyle}
                    >
                        <YoutubeOutlined <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %>/>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
                        target="_blank"
                        style={iconStyle}
                    >
                        <LinkedinOutlined <% if(!(e2etest === "none")) { %>  data-test="icon" <% } %>/>
                    </a>
                </Space>
            </Space>
        </div>
    );
};
