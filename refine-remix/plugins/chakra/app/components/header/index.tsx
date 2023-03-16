import { useGetIdentity } from "@refinedev/core";
import { Box, IconButton, HStack, Text, Avatar, Icon, useColorMode } from "@chakra-ui/react";
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
        {showUserInfo && (
          <HStack>
              <Text size="sm" fontWeight="bold">
                  {user?.name}
              </Text>
            <Avatar size="sm" name={user?.name} src={user?.avatar} />
          </HStack>
        )}
    </Box>
);
};
