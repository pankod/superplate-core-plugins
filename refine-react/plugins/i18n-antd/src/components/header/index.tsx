import { useContext } from "react";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import {
    Layout as AntdLayout,
    Space,
    Avatar,
    Typography,
    Switch,
    Button,
    Dropdown,
    theme,
    MenuProps,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import { ColorModeContext } from "../../contexts/color-mode";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC = () => {
    const { token } = useToken();
    const { i18n } = useTranslation();
    const locale = useGetLocale();
    const changeLanguage = useSetLocale();
    const { data: user } = useGetIdentity<IUser>();
    const { mode, setMode } = useContext(ColorModeContext);

    const currentLocale = locale();

    const menuItems: MenuProps["items"] = [...(i18n.languages || [])]
        .sort()
        .map((lang: string) => ({
            key: lang,
            onClick: () => changeLanguage(lang),
            icon: (
                <span style={{ marginRight: 8 }}>
                    <Avatar size={16} src={`/images/flags/${lang}.svg`} />
                </span>
            ),
            label: lang === "en" ? "English" : "German",
        }));

    return (
        <AntdLayout.Header
            style={{
                backgroundColor: token.colorBgElevated,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0px 24px",
                height: "64px",
                // these properties will make the header stick to the top of the page
                position: "sticky",
                top: 0,
                zIndex: 1,
            }}
        >
            <Space>
                <Dropdown
                    menu={{
                        items: menuItems,
                        selectedKeys: currentLocale ? [currentLocale] : [],
                    }}
                >
                    <Button type="text">
                        <Space>
                            <Avatar
                                size={16}
                                src={`/images/flags/${currentLocale}.svg`}
                            />
                            {currentLocale === "en" ? "English" : "German"}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <Switch
                    checkedChildren="🌛"
                    unCheckedChildren="🔆"
                    onChange={() =>
                        setMode(mode === "light" ? "dark" : "light")
                    }
                    defaultChecked={mode === "dark"}
                />
                <Space style={{ marginLeft: "8px" }} size="middle">
                    {user?.name && <Text strong>{user.name}</Text>}
                    {user?.avatar && (
                        <Avatar src={user?.avatar} alt={user?.name} />
                    )}
                </Space>
            </Space>
        </AntdLayout.Header>
    );
};
