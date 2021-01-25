import React from "react";
import styles from "./index.module.scss";

export const Button: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
    return (
        <a
            {...props}
            target="_blank"
            href="https://pankod.github.io/electio/"
            rel="noopener noreferrer"
            className={styles.button}
        >
            {children}
        </a>
    );
};
