import { useGetIdentity, useGetLocale } from "@refinedev/core";
import { useRouter } from "next/router";
import Link from "next/link";
import {
    ActionIcon,
    Group,
    Header as MantineHeader,
    Title,
    Avatar,
    Menu,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core";
import { IconLanguage, IconMoonStars, IconSun } from "@tabler/icons";

interface IUser {
    name: string;
    avatar: string;
}

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity<IUser>();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const dark = colorScheme === "dark";
    const borderColor = dark ? theme.colors.dark[6] : theme.colors.gray[2];

    const locale = useGetLocale();
    const currentLocale = locale();
    const { locales } = useRouter();

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
                        {[...(locales ?? [])].sort().map((lang: string) => (
                            <Menu.Item
                                key={lang}
                                component={Link}
                                href="/"
                                locale={lang}
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
