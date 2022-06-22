import React, { useState } from "react";
import {
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useLogout,
    useTitle,
    useTranslate,
    useRefineContext,
    useRouterContext,
    useMenu,
} from "@pankod/refine-core";
import {
    Box,
    Drawer,
    MuiList,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Tooltip,
    Button,
    IconButton,
} from "@pankod/refine-mui";
import {
    ListOutlined,
    Logout,
    ExpandLess,
    ExpandMore,
    ChevronLeft,
    ChevronRight,
    MenuRounded,
    Dashboard,
} from "@mui/icons-material";

import { Title as DefaultTitle } from "../title";

export const Sider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);

    const drawerWidth = () => {
        if (collapsed) return 64;
        return 200;
    };

    const t = useTranslate();
    const { hasDashboard } = useRefineContext();
    const { Link } = useRouterContext();

    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
    const isExistAuthentication = useIsExistAuthentication();
    const { mutate: logout } = useLogout();
    const Title = useTitle();

    const [open, setOpen] = useState<{ [k: string]: any }>({});

    React.useEffect(() => {
        setOpen((previousOpen) => {
            const previousOpenKeys: string[] = Object.keys(previousOpen);
            const uniqueKeys = new Set([
                ...previousOpenKeys,
                ...defaultOpenKeys,
            ]);
            const uniqueKeysRecord = Object.fromEntries(
                Array.from(uniqueKeys.values()).map((key) => [key, true]),
            );
            return uniqueKeysRecord;
        });
    }, [defaultOpenKeys]);

    const RenderToTitle = Title ?? DefaultTitle;

    const handleClick = (key: string) => {
        setOpen({ ...open, [key]: !open[key] });
    };

    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
        return tree.map((item: ITreeMenu) => {
            const { icon, label, route, name, children, parentName } = item;
            const isOpen = open[route || ""] || false;

            const isSelected = route === selectedKey;
            const isNested = !(parentName === undefined);

            if (children.length > 0) {
                return (
                    <div key={route}>
                        <Tooltip
                            title={label ?? name}
                            placement="right"
                            disableHoverListener={!collapsed}
                            arrow
                        >
                            <ListItemButton
                                onClick={() => {
                                    if (collapsed) {
                                        setCollapsed(false);
                                        if (!isOpen) {
                                            handleClick(route || "");
                                        }
                                    } else {
                                        handleClick(route || "");
                                    }
                                }}
                                sx={{
                                    pl: isNested ? 4 : 2,
                                    justifyContent: "center",
                                    "&.Mui-selected": {
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        justifyContent: "center",
                                        minWidth: 36,
                                        color: "primary.contrastText",
                                    }}
                                >
                                    {icon ?? <ListOutlined />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    primaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: "14px",
                                        fontWeight: isSelected
                                            ? "bold"
                                            : "normal",
                                    }}
                                />
                                {!collapsed &&
                                    (isOpen ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>
                        </Tooltip>
                        {!collapsed && (
                            <Collapse
                                in={open[route || ""]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <MuiList component="div" disablePadding>
                                    {renderTreeView(children, selectedKey)}
                                </MuiList>
                            </Collapse>
                        )}
                    </div>
                );
            }

            return (
                <CanAccess
                    key={route}
                    resource={name.toLowerCase()}
                    action="list"
                >
                    <Tooltip
                        title={label ?? name}
                        placement="right"
                        disableHoverListener={!collapsed}
                        arrow
                    >
                        <ListItemButton
                            component={Link}
                            href={route}
                            to={route}
                            selected={isSelected}
                            onClick={() => {
                                setOpened(false);
                            }}
                            sx={{
                                pl: isNested ? 4 : 2,
                                py: isNested ? 1.25 : 1,
                                "&.Mui-selected": {
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                    backgroundColor: "transparent",
                                },
                                justifyContent: "center",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    justifyContent: "center",
                                    minWidth: 36,
                                    color: "primary.contrastText",
                                }}
                            >
                                {icon ?? <ListOutlined />}
                            </ListItemIcon>
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: "14px",
                                    fontWeight: isSelected ? "bold" : "normal",
                                }}
                            />
                        </ListItemButton>
                    </Tooltip>
                </CanAccess>
            );
        });
    };

    const drawer = (
        <MuiList disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>
            {hasDashboard ? (
                <Tooltip
                    title={t("dashboard.title", "Dashboard")}
                    placement="right"
                    disableHoverListener={!collapsed}
                    arrow
                >
                    <ListItemButton
                        component={Link}
                        href="/"
                        to="/"
                        selected={selectedKey === "/"}
                        onClick={() => {
                            setOpened(false);
                        }}
                        sx={{
                            pl: 2,
                            py: 1,
                            "&.Mui-selected": {
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                                backgroundColor: "transparent",
                            },
                            justifyContent: "center",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                justifyContent: "center",
                                minWidth: 36,
                                color: "primary.contrastText",
                            }}
                        >
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText
                            primary={t("dashboard.title", "Dashboard")}
                            primaryTypographyProps={{
                                noWrap: true,
                                fontSize: "14px",
                                fontWeight:
                                    selectedKey === "/" ? "bold" : "normal",
                            }}
                        />
                    </ListItemButton>
                </Tooltip>
            ) : null}
            {renderTreeView(menuItems, selectedKey)}
            {isExistAuthentication && (
                <Tooltip
                    title={t("buttons.logout", "Logout")}
                    placement="right"
                    disableHoverListener={!collapsed}
                    arrow
                >
                    <ListItemButton
                        key="logout"
                        onClick={() => logout()}
                        sx={{ justifyContent: "center" }}
                    >
                        <ListItemIcon
                            sx={{
                                justifyContent: "center",
                                minWidth: 36,
                                color: "primary.contrastText",
                            }}
                        >
                            <Logout />
                        </ListItemIcon>
                        <ListItemText
                            primary={t("buttons.logout", "Logout")}
                            primaryTypographyProps={{
                                noWrap: true,
                                fontSize: "14px",
                            }}
                        />
                    </ListItemButton>
                </Tooltip>
            )}
        </MuiList>
    );

    return (
        <>
            <Box
                sx={{
                    width: { xs: drawerWidth() },
                    display: {
                        xs: "none",
                        md: "block",
                    },
                    transition: "width 0.3s ease",
                }}
            />
            <Box
                component="nav"
                sx={{
                    position: "fixed",
                    zIndex: 1101,
                    width: { sm: drawerWidth() },
                    display: "flex",
                }}
            >
                <Drawer
                    variant="temporary"
                    open={opened}
                    onClose={() => setOpened(false)}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            width: 256,
                            bgcolor: "secondary.main",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <RenderToTitle collapsed={false} />
                    </Box>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{ elevation: 1 }}
                    sx={{
                        display: { xs: "none", md: "block" },
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            bgcolor: "secondary.main",
                            overflow: "hidden",
                            transition:
                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                        },
                    }}
                    open
                >
                    <Box
                        sx={{
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <RenderToTitle collapsed={collapsed} />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowX: "hidden",
                            overflowY: "auto",
                        }}
                    >
                        {drawer}
                    </Box>
                    <Button
                        sx={{
                            background: "rgba(0,0,0,.5)",
                            color: "primary.contrastText",
                            textAlign: "center",
                            borderRadius: 0,
                            borderTop: "1px solid #ffffff1a",
                        }}
                        fullWidth
                        size="large"
                        onClick={() => setCollapsed((prev) => !prev)}
                    >
                        {collapsed ? <ChevronRight /> : <ChevronLeft />}
                    </Button>
                </Drawer>
                <Box
                    sx={{
                        display: { xs: "block", md: "none" },
                        position: "fixed",
                        top: "64px",
                        left: "0px",
                        borderRadius: "0 6px 6px 0",
                        bgcolor: "secondary.main",
                        zIndex: 1199,
                        width: "36px",
                    }}
                >
                    <IconButton
                        sx={{ color: "#fff", width: "36px" }}
                        onClick={() => setOpened((prev) => !prev)}
                    >
                        <MenuRounded />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};
