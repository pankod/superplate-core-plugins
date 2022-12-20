import React from "react";
import { TitleProps } from "@pankod/refine-core";
import { Center } from "@pankod/refine-mantine";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    return (
        <Link to="/">
            <Center p="xs">
                {collapsed ? (
                    <img src="/refine-collapsed.svg" alt="Refine" />
                ) : (
                    <img src="/refine.svg" alt="Refine" width="140px" />
                )}
            </Center>
        </Link>
    );
};
