import React from "react";
import { Card, CardHeader, CardContent, CardFooter, Button } from "./styled";

export const StyledSystemExample: React.FC = () => {
    return (
        <Card bg="wheat" maxWidth="20rem" borderRadius={10} mx="auto" mt="32px">
            <CardHeader
                p="16px"
                borderBottomWidth={1}
                borderBottomColor="green"
                borderBottomStyle="solid"
            >
                <h2>Styled-System Example</h2>
            </CardHeader>
            <CardContent p="20px">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ab, officiis dolor eaque optio quam deserunt nesciunt
                    tempore iste unde cum eius explicabo debitis non nostrum
                    incidunt natus. Molestiae, veritatis quo.
                </p>
                <p>
                    A cupiditate quae quidem accusamus, sint dolores distinctio
                    doloribus earum culpa quas facilis repellendus soluta illo
                    provident eaque inventore sapiente molestias atque dolor
                    ipsam autem eveniet dolorem. Quibusdam, nostrum cupiditate.
                </p>
            </CardContent>
            <CardFooter
                p="24px"
                borderTopWidth={1}
                borderTopColor="green"
                borderTopStyle="solid"
                textAlign="center"
            >
                <Button
                    py="8px"
                    px="12px"
                    bg="green"
                    color="white"
                    fontSize={16}
                    fontWeight={500}
                    borderRadius={8}
                    href="https://styled-components.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go To Documentation
                </Button>
            </CardFooter>
        </Card>
    );
};
