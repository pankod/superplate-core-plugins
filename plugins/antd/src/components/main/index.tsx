import React from "react";
import { Box } from "@chakra-ui/react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <Box bg="main.100" color="white" textAlign="center" py={10}>
            <h1 style={{ color: "#fff", fontSize: 46 }}>next-cli</h1>
            <p style={{ fontSize: 18 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <Button type="primary" size="large">
                Docs
            </Button>
        </Box>
    );
};
