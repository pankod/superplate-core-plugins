import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import {
    ActionIcon,
    Avatar,
    Group,
    Header as MantineHeader,
    Title,
    useMantineColorScheme,
    useMantineTheme,
    Menu,
} from "@mantine/core";
import { IconSun, IconMoonStars, IconLanguage } from "@tabler/icons";

import i18n from "i18n";

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity<IUser>();

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();

    const theme = useMantineTheme();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const borderColor = dark ? theme.colors.dark[6] : theme.colors.gray[2];

    return (
        <MantineHeader
            zIndex={199}
            height={64}
            py={6}
            px="sm"
            sx={{
                borderBottom: `1px solid ${borderColor}`,
            }}
        >
            <Group
                position="right"
                align="center"
                sx={{
                    height: "100%",
                }}
            >
                <Menu shadow="md">
                    <Menu.Target>
                        <ActionIcon variant="outline">
                            <IconLanguage size={18} />
                        </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {[...(i18n.languages ?? [])]
                            .sort()
                            .map((lang: string) => (
                                <Menu.Item
                                    key={lang}
                                    onClick={() => {
                                        changeLanguage(lang);
                                    }}
                                    value={lang}
                                    color={
                                        lang === currentLocale
                                            ? "primary"
                                            : undefined
                                    }
                                    icon={
                                        <Avatar
                                            src={`/images/flags/${lang}.svg`}
                                            size={18}
                                            radius="lg"
                                        />
                                    }
                                >
                                    {lang === "en" ? "English" : "German"}
                                </Menu.Item>
                            ))}
                    </Menu.Dropdown>
                </Menu>

                <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "primary"}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>

                {(user?.name || user?.avatar) && (
                    <Group spacing="xs">
                        {user?.name && <Title order={6}>{user?.name}</Title>}
                        <Avatar
                            src={user?.avatar}
                            alt={user?.name}
                            radius="xl"
                        />
                    </Group>
                )}
            </Group>
        </MantineHeader>
    );
};
