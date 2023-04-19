import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGetIdentity } from "@refinedev/core";
import { RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import {
    AppBar,
    IconButton,
    Avatar,
    Stack,
    FormControl,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, Menu } from "@mui/icons-material";

import { ColorModeContext } from "@contexts";

interface IUser {
    name: string;
    avatar: string;
}

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
    isSiderOpen,
    onToggleSiderClick,
    toggleSiderIcon: toggleSiderIconFromProps,
}) => {
    const { mode, setMode } = useContext(ColorModeContext);
    const { locale: currentLocale, locales, pathname, query } = useRouter();

    const { data: user } = useGetIdentity<IUser>();

    const hasSidebarToggle = Boolean(onToggleSiderClick);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Stack direction="row" width="100%" alignItems="center">
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
                        gap="16px"
                    >
                        <FormControl sx={{ minWidth: 120 }}>
                            <Select
                                disableUnderline
                                defaultValue={currentLocale}
                                inputProps={{ "aria-label": "Without label" }}
                                variant="standard"
                                sx={{
                                    color: "inherit",
                                    "& .MuiSvgIcon-root": {
                                        color: "inherit",
                                    },
                                }}
                            >
                                {[...(locales ?? [])]
                                    .sort()
                                    .map((lang: string) => (
                                        // @ts-ignore
                                        <MenuItem
                                            component={Link}
                                            href={{ pathname, query }}
                                            locale={lang}
                                            selected={currentLocale === lang}
                                            key={lang}
                                            defaultValue={lang}
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
