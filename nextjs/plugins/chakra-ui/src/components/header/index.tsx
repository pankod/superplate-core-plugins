import React from "react";
import { Center } from "@chakra-ui/react";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <Center bg="header.100" <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
            <Logo />
        </Center>
    );
};
