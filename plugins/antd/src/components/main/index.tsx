import React from "react";
import { Box, useTheme } from "@chakra-ui/react";

import { Button } from "@components";

export const Main: React.FC = () => {
    const theme = useTheme();
    return (
        <Box bg="main.100" color="white" textAlign="center" py={10}>
            <h1 style={{ fontSize: theme.fontSizes["5xl"] }}>next-cli</h1>
            <p style={{ fontSize: theme.fontSizes["lg"] }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                Docs
            </Button>
        </Box>
    );
};
