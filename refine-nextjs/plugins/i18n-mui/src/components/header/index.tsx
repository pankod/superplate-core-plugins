import { ColorModeContext } from "@contexts";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useGetIdentity } from "@refinedev/core";
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

interface IUser {
    name: string;
    avatar: string;
}

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
    sticky = true,
}) => {
    const { mode, setMode } = useContext(ColorModeContext);
    const { locale: currentLocale, locales, pathname, query } = useRouter();

    const { data: user } = useGetIdentity<IUser>();

    return (
        <AppBar position={sticky ? "sticky" : "relative"}>
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
                                                        width: "24px",
                                                        height: "24px",
                                                        marginRight: "5px",
                                                    }}
                                                    src={`/images/flags/${lang}.svg`}
                                                />
                                                <Typography>
                                                    {lang === "en"
                                                        ? "English"
                                                        : "German"}
                                                </Typography>
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
                                            display: {
                                                xs: "none",
                                                sm: "inline-block",
                                            },
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
