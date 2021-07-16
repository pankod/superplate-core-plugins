import React from "react";
import styles from "./index.module.scss";

export type IButton = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Button: React.FC<IButton> = ({ children, ...props }) => {
    return (
        <a
            {...props}
            target="_blank"
            href="https://pankod.github.io/superplate/"
            rel="noopener noreferrer"
            className={styles.button}
            <%_ if (testing === 'testing-library') { _%>
            data-testid="btn" 
            <%_ } _%>
        >
            {children}
        </a>
    );
};
