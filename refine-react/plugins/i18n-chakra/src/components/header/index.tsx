import {
    Avatar,
    Box,
    HStack,
    Icon,
    IconButton,
    Text,
    useColorMode,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { RefineThemedLayoutV2HeaderProps, HamburgerMenu } from "@refinedev/chakra-ui";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import {
    IconMoon,
    IconSun,
    IconLanguage,
} from "@tabler/icons";

import i18n from "i18n";

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

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();

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
        >
            <HamburgerMenu />

            <HStack>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<IconLanguage />}
                        variant="ghost"
                    />
                    <MenuList>
                        {[...(i18n.languages ?? [])]
                            .sort()
                            .map((lang: string) => (
                                <MenuItem
                                    key={lang}
                                    onClick={() => {
                                        changeLanguage(lang);
                                    }}
                                    value={lang}
                                    color={
                                        lang === currentLocale
                                            ? "green"
                                            : undefined
                                    }
                                    icon={
                                        <Avatar
                                            src={`/images/flags/${lang}.svg`}
                                            h={18}
                                            w={18}
                                        />
                                    }
                                >
                                    {lang === "en" ? "English" : "German"}
                                </MenuItem>
                            ))}
                    </MenuList>
                </Menu>

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
