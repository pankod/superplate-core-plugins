import { useGetIdentity } from "@refinedev/core";
import {
    Box,
    IconButton,
    HStack,
    Text,
    Avatar,
    Icon,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { RefineThemedLayoutV2HeaderProps, HamburgerMenu } from "@refinedev/chakra-ui";
import {
    IconMoon,
    IconSun,
    IconLayoutSidebarLeftCollapse,
    IconLayoutSidebarLeftExpand,
} from "@tabler/icons";

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
    const { data: user } = useGetIdentity<IUser>();

    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = useColorModeValue(
        "refine.header.bg.light",
        "refine.header.bg.dark",
    );

    return (
        <Box
            py="2"
            pr="4"
            pl="2"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="full"
            height="64px"
            bg={bgColor}
            borderBottom="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            // these properties will make the header stick to the top of the page
            position="sticky"
            top={0}
            zIndex={1}
        >
            <HamburgerMenu />

            <HStack>
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
                {(user?.avatar || user?.name) && (
                    <HStack>
                        {user?.name && (
                            <Text size="sm" fontWeight="bold">
                                {user.name}
                            </Text>
                        )}
                        <Avatar
                            size="sm"
                            name={user?.name}
                            src={user?.avatar}
                        />
                    </HStack>
                )}
            </HStack>
        </Box>
    );
};
