import React, { useContext } from "react";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import { RefineThemedLayoutHeaderProps } from "@refinedev/mui";
import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    IconButton,
    Stack,
    Toolbar,
    Typography,
    FormControl,
    MenuItem,
    Select,
} from "@mui/material";

import i18n from "i18n";

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

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();

    const hasSidebarToggle = Boolean(onToggleSiderClick);

    return (
        <AppBar color="default" position="sticky">
            <Toolbar>
                <Stack direction="row" width="100%" alignItems="center">
                    {hasSidebarToggle && (
                        <IconButton
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
                        gap="16px"
                    >
                        <FormControl sx={{ minWidth: 120 }}>
                            <Select
                                disableUnderline
                                defaultValue={currentLocale}
                                inputProps={{ "aria-label": "Without label" }}
                                variant="standard"
                            >
                                {[...(i18n.languages ?? [])]
                                    .sort()
                                    .map((lang: string) => (
                                        <MenuItem
                                            selected={currentLocale === lang}
                                            key={lang}
                                            defaultValue={lang}
                                            onClick={() => {
                                                changeLanguage(lang);
                                            }}
                                            value={lang}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Avatar
                                                    sx={{
                                                        width: "16px",
                                                        height: "16px",
                                                        marginRight: "5px",
                                                    }}
                                                    src={`/images/flags/${lang}.svg`}
                                                />
                                                {lang === "en"
                                                    ? "English"
                                                    : "German"}
                                            </Stack>
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>

                        <IconButton
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
