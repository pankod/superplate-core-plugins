import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Link as ChakraLink } from "@pankod/refine-chakra-ui";

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
