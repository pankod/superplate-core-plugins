import React, { useContext } from "react";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import { RefineThemedLayoutV2HeaderProps, HamburgerMenu } from "@refinedev/mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
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

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
    const { mode, setMode } = useContext(ColorModeContext);

    const { data: user } = useGetIdentity<IUser>();

    const changeLanguage = useSetLocale();
    const locale = useGetLocale();
    const currentLocale = locale();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Stack direction="row" width="100%" alignItems="center">
                    <HamburgerMenu />
                    <Stack
                        direction="row"
                        width="100%"
                        justifyContent="flex-end"
                        alignItems="center"
                        gap="16px"
                    >
                        <FormControl sx={{ minWidth: 64 }}>
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
                                    "& .MuiStack-root > .MuiTypography-root": {
                                        display: {
                                            xs: "none",
                                            sm: "block",
                                        },
                                    },
                                }}
                            >
                                {[...(i18n.languages ?? [])]
                                    .sort()
                                    .map((lang: string) => (
                                        // @ts-ignore
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
                                                        width: "24px",
                                                        height: "24px",
                                                        marginRight: "5px",
                                                    }}
                                                    src={`/images/flags/${lang}.svg`}
                                                />
                                                <Typography>{lang === "en" ? "English" : "German"}</Typography>
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
                                    <Typography
                                        sx={{
                                            display: { xs: "none", sm: "inline-block" },
                                        }}
                                        variant="subtitle2"
                                    >
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
