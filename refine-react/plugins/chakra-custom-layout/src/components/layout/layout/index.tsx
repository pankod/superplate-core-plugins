import React from "react";
import { LayoutProps } from "@pankod/refine-core";
import { Box, useColorModeValue } from "@pankod/refine-chakra-ui";

import { Sider as DefaultSider } from "../sider";
import { Header as DefaultHeader } from "../header";

export const Layout: React.FC<LayoutProps> = ({
    Sider,
    Header,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    const bg = useColorModeValue("gray.100", "gray.900");

    return (
        <Box display="flex" bg={bg}>
            <SiderToRender />
            <Box
                display="flex"
                flexDirection="column"
                flex={1}
                overflow="hidden"
                minH="100vh"
            >
                <HeaderToRender />
                <Box p={[2, 4]}>{children}</Box>
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
        </Box>
    );
};
