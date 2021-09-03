import React, { useState } from "react";
import { Layout, Menu, Grid } from "antd";
import {
    RightOutlined,
    <%_ if (answers["auth-provider"] !== 'none' && i18n !== "no") { _%>
    LogoutOutlined
    <%_ } _%>
 } from "@ant-design/icons";

import {
    <%_ if (answers["auth-provider"] !== 'none' && i18n !== "no") { _%>
    useTranslate,
    <%_ } _%>
    useMenu,
    useLogout,
    useTitle,
    useNavigation,
} from "@pankod/refine";
import { antLayoutSider, antLayoutSiderMobile } from "./styles";

export const Sider: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { mutate: logout } = useLogout();
    const Title = useTitle();
    <%_ if (answers["auth-provider"] !== 'none' && i18n !== "no") { _%>
    const translate = useTranslate();
    <%_ } _%>
    const { menuItems, selectedKey } = useMenu();
    const { push } = useNavigation();
    const breakpoint = Grid.useBreakpoint();

    const isMobile = !breakpoint.lg;

    return (
        <Layout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
            collapsedWidth={isMobile ? 0 : 80}
            breakpoint="lg"
            style={isMobile ? antLayoutSiderMobile : antLayoutSider}
            className={`refine-sider ${
                !collapsed ? "refine-sider-collapsed" : ""
            }`}
        >
            <Title collapsed={collapsed} />
            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                onClick={({ key }) => {
                    if (key === "logout") {
                        logout();
                        return;
                    }

                    if (!breakpoint.lg) {
                        setCollapsed(true);
                    }

                    push(key as string);
                }}
            >
                {menuItems.map(({ icon, label, route }) => {
                    const isSelected = route === selectedKey;
                    return (
                        <Menu.Item
                            style={{
                                fontWeight: isSelected ? "bold" : "normal",
                            }}
                            key={route}
                            icon={icon}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {label}
                                {!collapsed && isSelected && <RightOutlined />}
                            </div>
                        </Menu.Item>
                    );
                })}

                    <%_ if (answers["auth-provider"] !== 'none') { _%>
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        <%_ if (i18n !== "no") { _%>
                        {translate("buttons.logout", "Logout")}
                        <%_ } else { _%>
                        "Logout"
                        <%_ } _%>
                    </Menu.Item>
                <%_ } _%>
            </Menu>
        </Layout.Sider>
    );
};
