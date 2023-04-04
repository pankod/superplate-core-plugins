import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetIdentity, useGetLocale } from "@refinedev/core";
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
import { ColorModeContext } from "../../contexts";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity<IUser>();

    const { token } = useToken();
    const { mode, setMode } = useContext(ColorModeContext);

    const locale = useGetLocale();
    const { locales } = useRouter();
    const currentLocale = locale();

    const menuItems: MenuProps["items"] = [...(locales || [])]
        .sort()
        .map((lang: string) => ({
            key: lang,
            icon: (
                <span style={{ marginRight: 8 }}>
                    <Avatar size={16} src={`/images/flags/${lang}.svg`} />
                </span>
            ),
            label: (
                <Link href="/" locale={lang}>
                    {lang === "en" ? "English" : "German"}
                </Link>
            ),
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
                {(user?.name || user?.avatar) && (
                    <Space style={{ marginLeft: "8px" }} size="middle">
                        {user?.name && <Text strong>{user.name}</Text>}
                        {user?.avatar && (
                            <Avatar src={user?.avatar} alt={user?.name} />
                        )}
                    </Space>
                )}
            </Space>
        </AntdLayout.Header>
    );
};
