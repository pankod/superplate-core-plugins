import React from "react";
import { Layout } from "antd";

import { Logo } from "@components";
import {} from "./index.module.css";

export const Header: React.FC = () => {
    return (
        <Layout>
            <Layout.Header className="header">
                <Logo />
            </Layout.Header>
        </Layout>
    );
};
