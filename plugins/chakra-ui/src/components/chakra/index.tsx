import React from "react";
import { Box } from "@chakra-ui/react";

/**
 * This component is created to provide a Chakra UI Example.
 *
 * To learn more about Chakra UI and styling
 * please visit https://chakra-ui.com/docs
 */

export const ChakraExample: React.FC = () => {
    return (
        <Box bg="green.100" mx="auto" my="4" borderRadius="lg" maxW="sm">
            <Box
                as="header"
                borderBottomWidth="1px"
                borderBottomColor="green.500"
                p="3"
            >
                <Box itemType="h2" fontWeight="semibold">
                    Chakra Example
                </Box>
            </Box>
            <Box as="main" p="4">
                <Box mb="3" color="gray.800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ab, officiis dolor eaque optio quam deserunt nesciunt
                    tempore iste unde cum eius explicabo debitis non nostrum
                    incidunt natus. Molestiae, veritatis quo.
                </Box>
                <Box mb="3" color="gray.500">
                    A cupiditate quae quidem accusamus, sint dolores distinctio
                    doloribus earum culpa quas facilis repellendus soluta illo
                    provident eaque inventore sapiente molestias atque dolor
                    ipsam autem eveniet dolorem. Quibusdam, nostrum cupiditate.
                </Box>
            </Box>
            <Box
                as="footer"
                borderTopWidth="1px"
                borderTopColor="green.500"
                p="3"
                textAlign="center"
            >
                <Box
                    as="a"
                    fontSize="md"
                    fontWeight="medium"
                    borderRadius="lg"
                    px="3"
                    py="2"
                    bg="green.500"
                    color="white"
                    href="https://chakra-ui.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go To Documentation
                </Box>
            </Box>
        </Box>
    );
};
