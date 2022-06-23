<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
import React, { useContext } from "react";
<%_ } else { _%>
import React from "react";
<%_ } _%>
import {
  useGetIdentity,
  useRouterContext
} from "@pankod/refine-core";
import {
  AppBar,
  <%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
  IconButton,
  <%_ } _%>
  Avatar,
  Stack,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@pankod/refine-mui";
<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
<%_ } _%>
import { useRouter } from "next/router";

<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
import { ColorModeContext } from "@contexts";
<%_ } _%>

export const Header: React.FC = () => {
<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
  const { mode, setMode } = useContext(ColorModeContext);
<%_ } _%>
  const { Link } = useRouterContext();
  const { locale: currentLocale, locales, pathname, query } = useRouter();

  const { data: user } = useGetIdentity();
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
          <%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
          <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
          <%_ } _%>
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
