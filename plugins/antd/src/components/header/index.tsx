import React from "react";
import { Layout } from "antd";

import { Logo } from "@components";
<%_ if (css_features === "styled-components") { _%>
// TODO: import styled file
<%_ } else { _%>
import styles from "./index.module.<%= css_features %>";
<%_ } _%>

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    );
};
