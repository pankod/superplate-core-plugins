import React from "react";
import { Container } from "react-bootstrap";

import { Logo } from "@components";
import styles from "./index.module.css";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    );
};
