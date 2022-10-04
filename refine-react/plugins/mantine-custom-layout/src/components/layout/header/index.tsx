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
