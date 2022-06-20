import React from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { 
    AppBar,
    <%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
    IconButton, 
    <%_ } _%>
    Stack, 
    Toolbar, 
    Typography, 
    Avatar  
} from "@pankod/refine-mui";
<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
<%_ } _%>

<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
import { ColorModeContext } from "contexts";
<%_ } _%>

export const Header: React.FC = () => {
<%_ if (answers["mui-dark-mode"] === "mui-dark-mode") { _%>
    const { mode, setMode } = useContext(ColorModeContext);
<%_ } _%>

    const { data: user } = useGetIdentity();
    const shouldRenderHeader = user && (user.name || user.avatar);

    return shouldRenderHeader ? (
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
                    <Stack
                        direction="row"
                        gap="16px"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="subtitle2">
                            {user?.name}
                        </Typography>
                        <Avatar src={user?.avatar} alt={user?.name} />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    ) : null;
};
