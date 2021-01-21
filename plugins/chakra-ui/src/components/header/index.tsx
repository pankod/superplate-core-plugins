import React from "react";
import { Box } from "@chakra-ui/react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <Box bg="header.100" textAlign="center">
            <Logo />
        </Box>
    );
};
