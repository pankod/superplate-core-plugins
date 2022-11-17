import React from "react";
import {
    Box,
    useTheme,
    Center,
    Heading,
    Text,
    Image,
    Link,
} from "@chakra-ui/react";

import { Button } from "components";

export const Main: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            py={10}
        >
            <h1 <% if(!(e2etest === "none")) { %>  data-test="main-heading" <% } %> style={{ fontSize: theme.fontSizes["5xl"] }}>superplate</h1>
            <p style={{ fontSize: theme.fontSizes["lg"] }}>
                The frontend boilerplate with superpowers!
            </p>
            <Button colorScheme="blue" variant="solid" size="md">
                <a
                    <% if(!(e2etest === "none")) { %>  data-test="docs-btn-anchor" <% } %>
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    Docs
                </a>
            </Button>

            <Center
                backgroundColor="#f8f8f8"
                flexDirection="column"
                display="flex"
                textAlign="left"
                width={800}
                padding={5}
                borderRadius={10}
                m={10}
            >
                <Box>
                    <Heading marginBottom={3}>Building a side project?</Heading>
                    <Text>
                        Meet the headless, React-based solution to build sleek{" "}
                        <b>CRUD</b> applications. With{" "}
                        <Link
                            color="teal.500"
                            href="https://s.refine.dev/superplate"
                            target="_blank"
                        >
                            refine
                        </Link>
                        , you can be confident that your codebase will always
                        stay clean and boilerplate-free.
                    </Text>
                    <Text>
                        Try{" "}
                        <Link
                            color="teal.500"
                            href="https://s.refine.dev/superplate"
                            target="_blank"
                        >
                            refine
                        </Link>{" "}
                        to rapidly build your next <b>CRUD</b> project, whether
                        it's an admin panel, dashboard, internal tool or
                        storefront.
                    </Text>
                </Box>
                <Link
                    color="teal.500"
                    href="https://s.refine.dev/superplate"
                    target="_blank"
                >
                    <Image
                        boxSize="700px"
                        objectFit="cover"
                        src="https://cdn.discordapp.com/attachments/991655841793052723/1042775236954820658/Group_572_1.png"
                    />
                </Link>
            </Center>
        </Box>
    );
};
