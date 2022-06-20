import { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Avatar,
  Stack,
  Toolbar,
  Typography,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "@contexts";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar color="default" position="sticky" elevation={1}>
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          onClick={() => {
            setMode();
          }}
        >
          {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
        </IconButton>
        {showUserInfo && (
          <Stack direction="row" gap="8px" alignItems="center">
            {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
            {user.name && (
              <Typography variant="subtitle2">{user?.name}</Typography>
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};
