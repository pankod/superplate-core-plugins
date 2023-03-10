import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Center } from "@refinedev/mantine";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

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
