import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

export const Cards: React.FC = () => {
    const data: { title: string; content: string }[] = [
        {
            title: "Redux",
            content:
                "React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Styled-Components",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "Bootstrap",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
        {
            title: "SVGR",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        },
    ];

    return (
        <SimpleGrid columns={4} spacing={10} px={20} pt={10}>
            {data.map((item) => (
                <Box>
                    <Heading fontSize={16} fontWeight={500} py={5}>
                        {item.title}
                    </Heading>
                    <Text fontSize={14}>{item.content}</Text>
                </Box>
            ))}
        </SimpleGrid>
    );
};
