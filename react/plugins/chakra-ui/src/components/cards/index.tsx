import React from "react";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";

import data from "meta.json";

export const Cards: React.FC = () => {

  return (
    <SimpleGrid columns={4} spacing={10} px={20} py={10}>
      {(data?.plugins ?? []).map((plugin) => (
        <Box key={plugin.name} <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
          <Heading fontSize={16} fontWeight="500" py={5}>
            {plugin.name}
          </Heading>
          <Text fontSize={14}>{plugin.description}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
