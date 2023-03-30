import React, { useContext } from "react";
import { useGetIdentity } from "@refinedev/core";
import {
    AppBar,
    IconButton,
    Avatar,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { RefineThemedLayoutHeaderProps } from "@refinedev/mui";
import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";

import { ColorModeContext } from "../../contexts/color-mode";

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC<RefineThemedLayoutHeaderProps> = ({
    isSiderOpen,
    onToggleSiderClick,
    toggleSiderIcon: toggleSiderIconFromProps,
}) => {
    const { mode, setMode } = useContext(ColorModeContext);

    const { data: user } = useGetIdentity<IUser>();

    const hasSidebarToggle = Boolean(onToggleSiderClick);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    {hasSidebarToggle && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => onToggleSiderClick?.()}
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                ...(isSiderOpen && { display: "none" }),
                            }}
                        >
                            {toggleSiderIconFromProps?.(
                                Boolean(isSiderOpen),
                            ) ?? <Menu />}
                        </IconButton>
                    )}

                    <Stack
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                setMode();
                            }}
                        >
                            {mode === "dark" ? (
                                <LightModeOutlined />
                            ) : (
                                <DarkModeOutlined />
                            )}
                        </IconButton>

                        {(user?.avatar || user?.name) && (
                            <Stack
                                direction="row"
                                gap="16px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                {user?.name && (
                                    <Typography variant="subtitle2">
                                        {user?.name}
                                    </Typography>
                                )}
                                <Avatar src={user?.avatar} alt={user?.name} />
                            </Stack>
                        )}
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
