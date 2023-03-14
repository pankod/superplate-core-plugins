import React, { useContext } from "react";
import {
  useGetIdentity,
  useRouterContext
} from "@refinedev/core";
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
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

import { ColorModeContext } from "@contexts";

 interface IUser {
    name: string;
    avatar: string;
  }

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { Link } = useRouterContext();
  const { locale: currentLocale, locales, pathname, query } = useRouter();

  const { data: user } = useGetIdentity<IUser>();
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar color="default" position="sticky" elevation={1}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              disableUnderline
              defaultValue={currentLocale}
              inputProps={{ "aria-label": "Without label" }}
              variant="standard"
            >
              {[...(locales ?? [])].sort().map((lang: string) => (
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
                    {lang === "en" ? "English" : "German"}
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {showUserInfo && (
            <Stack direction="row" gap="16px" alignItems="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              {user.name && (
                <Typography variant="subtitle2">{user?.name}</Typography>
              )}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
