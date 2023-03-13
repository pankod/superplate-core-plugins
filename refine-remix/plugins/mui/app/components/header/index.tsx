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
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "@contexts";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

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
          <IconButton
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
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
