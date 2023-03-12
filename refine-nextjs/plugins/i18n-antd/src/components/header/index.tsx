import { useContext } from "react";
import {
  useGetLocale,
  useSetLocale,
  useGetIdentity,
} from "@refinedev/core";
import {
  Layout as AntdLayout,
  Space,
  Menu,
  Button,
  Dropdown,
  Avatar,
  Typography,
  Switch,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";

import { ColorModeContext } from "@contexts";

const { Text } = Typography;

 interface IUser {
    name: string;
    avatar: string;
  }

export const Header: React.FC = () => {
  const locale = useGetLocale();
  const { locales } = useRouter();
  const currentLocale = locale();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const menu = (
    <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
      {[...(locales || [])].sort().map((lang: string) => (
        <Menu.Item
          key={lang}
          icon={
            <span style={{ marginRight: 8 }}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`} />
            </span>
          }
        >
          <Link href="/" locale={lang}>
            {lang === "en" ? "English" : "German"}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
      }}
    >
      <Switch
        checkedChildren="🌛"
        unCheckedChildren="🔆"
        onChange={() => setMode(mode === "light" ? "dark" : "light")}
        defaultChecked={mode === "dark"}
      />
      <Dropdown overlay={menu}>
        <Button type="link">
          <Space>
            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
            {currentLocale === "en" ? "English" : "German"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Space style={{ marginLeft: "8px" }}>
        {user?.name && (
          <Text style={{ color: "white" }} strong>
            {user.name}
          </Text>
        )}
        {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      </Space>
    </AntdLayout.Header>
  );
};

