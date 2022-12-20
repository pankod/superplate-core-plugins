import React from "react";
import { TitleProps } from "@pankod/refine-core";
import { Link as ChakraLink } from "@pankod/refine-chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
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
