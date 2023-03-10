import React from "react";
import type { TitleProps } from "@refinedev/core";
import { useRouterContext } from "@refinedev/core";
import { Link as ChakraLink } from "@refinedev/chakra-ui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <ChakraLink as={Link} to="/">
            {collapsed ? (
                <img src="/refine-collapsed.svg" alt="Refine" />
            ) : (
                <img src="/refine.svg" alt="Refine" width="140px" />
            )}
        </ChakraLink>
    );
};
