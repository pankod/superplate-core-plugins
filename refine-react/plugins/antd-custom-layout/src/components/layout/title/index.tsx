import React from "react";
import { TitleProps } from "@pankod/refine-core";
<%_ if (routerProvider === "react-router-v6") { _%>
import routerProvider from "@pankod/refine-react-router-v6";
<%_ } _%>
<%_ if (routerProvider === "react-location") { _%>
import routerProvider from "@pankod/refine-react-location";
<%_ } _%>

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => (
    <Link to="/">
        {collapsed ? (
            <img
                src={"/refine-collapsed.svg"}
                alt="Refine"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 24px",
                }}
            />
        ) : (
            <img
                src={"/refine.svg"}
                alt="Refine"
                style={{
                    width: "200px",
                    padding: "12px 24px",
                }}
            />
        )}
    </Link>
);
