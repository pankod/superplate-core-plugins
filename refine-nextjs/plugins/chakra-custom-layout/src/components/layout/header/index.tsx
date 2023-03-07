<%_ if (answers["chakra-dark-mode"] === "chakra-dark-mode") { _%>
import { useGetIdentity } from "@refinedev/core";
import { Box, IconButton, HStack, Text, Avatar, Icon, useColorMode } from "@refinedev/chakra-ui";
import { IconMoon, IconSun } from "@tabler/icons";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
        py="2"
        px="4"
        display="flex"
        justifyContent="flex-end"
        gap={2}
        w="full"
        bg="chakra-body-bg"
    >
      {showUserInfo && (
          <HStack>
              <Text size="sm" fontWeight="bold">
                  {user?.name}
              </Text>
              <Avatar size="sm" name={user?.name} src={user?.avatar} />
          </HStack>
        )}
        <IconButton
            variant="ghost"
            aria-label="Toggle theme"
            onClick={toggleColorMode}
        >
            <Icon
                as={colorMode === "light" ? IconMoon : IconSun}
                w="24px"
                h="24px"
            />
        </IconButton>
    </Box>
);
};

<%_ } else { _%>
import React from "react";
import { useGetIdentity } from "@refinedev/core";
import { Box, Avatar, Text, HStack } from "@refinedev/chakra-ui";

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity();

    const shouldRenderHeader = user && (user.name || user.avatar);

    return shouldRenderHeader ? (
        <Box
            py="2"
            px="4"
            display="flex"
            justifyContent="flex-end"
            w="full"
            bg="chakra-body-bg"
        >
            <HStack>
                <Text size="sm" fontWeight="bold">
                    {user?.name}
                </Text>
                <Avatar size="sm" name={user?.name} src={user?.avatar} />
            </HStack>
        </Box>
    ) : null;
};

<%_ } _%>
