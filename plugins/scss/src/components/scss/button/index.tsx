import React from "react";

export const Button: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
    return (
        <a
            {...props}
            target="_blank"
            href="https://pankod.github.io/electio/"
            rel="noopener noreferrer"
            className="button"
        >
            {children}
        </a>
    );
};
