<%_ if (answers["mantine-dark-mode"] === "mantine-dark-mode") { _%>
    import { useGetIdentity } from "@pankod/refine-core";
    import {
    ActionIcon,
    Group,
    MantineHeader,
    Title,
    Avatar,
    useMantineColorScheme,
    } from "@pankod/refine-mantine";
    import { IconSun, IconMoonStars } from "@tabler/icons";

    export const Header: React.FC = () => {
    const { data: user } = useGetIdentity();
    const showUserInfo = user && (user.name || user.avatar);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <MantineHeader height={50} p="xs">
            <Group position="right">
                <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "primary"}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>
                {showUserInfo && (
                    <Group spacing="xs">
                        <Title order={6}>{user?.name}</Title>
                        <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
                    </Group>
                )}
            </Group>
        </MantineHeader>
    );
    };
<%_ } else { _%>
    import React from "react";
    import { useGetIdentity } from "@pankod/refine-core";
    import {
        Avatar,
        Group,
        MantineHeader,
        Title as MantineTitle,
    } from "@pankod/refine-mantine";

    export const Header: React.FC = () => {
        const { data: user } = useGetIdentity();

        const shouldRenderHeader = user && (user.name || user.avatar);

        return shouldRenderHeader ? (
            <MantineHeader height={50} py={6} px="sm">
                <Group position="right">
                    <MantineTitle order={6}>{user?.name}</MantineTitle>
                    <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
                </Group>
            </MantineHeader>
        ) : null;
    };
<%_ } _%>
