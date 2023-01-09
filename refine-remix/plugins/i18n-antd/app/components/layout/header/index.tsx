<%_ if (answers["antd-dark-mode"] === "antd-dark-mode") { _%>

  import { useContext } from "react";
import {
  useGetLocale,
  useSetLocale,
  useGetIdentity,
} from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Menu,
  Button,
  Icons,
  Dropdown,
  Avatar,
  Typography,
  Switch,
} from "@pankod/refine-antd";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "~/contexts";

const { DownOutlined } = Icons;
const { Text } = Typography;

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();
  const { data: user } = useGetIdentity();
  const { mode, setMode } = useContext(ColorModeContext);

  const currentLocale = locale();

  const menu = (
    <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
      {[...(i18n.languages || [])].sort().map((lang: string) => (
        <Menu.Item
          key={lang}
          onClick={() => changeLanguage(lang)}
          icon={
            <span style={{ marginRight: 8 }}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`} />
            </span>
          }
        >
          {lang === "en" ? "English" : "German"}
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
          <Text ellipsis strong>
            {user.name}
          </Text>
        )}
        {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      </Space>
    </AntdLayout.Header>
  );
};
<%_ } else { _%>

  import {
  useGetLocale,
  useSetLocale,
  useGetIdentity,
} from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Menu,
  Button,
  Icons,
  Dropdown,
  Avatar,
  Typography,
} from "@pankod/refine-antd";
import { useTranslation } from "react-i18next";

const { DownOutlined } = Icons;
const { Text } = Typography;

export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const locale = useGetLocale();
  const changeLanguage = useSetLocale();
  const { data: user } = useGetIdentity();

  const currentLocale = locale();

  const menu = (
    <Menu selectedKeys={currentLocale ? [currentLocale] : []}>
      {[...(i18n.languages || [])].sort().map((lang: string) => (
        <Menu.Item
          key={lang}
          onClick={() => changeLanguage(lang)}
          icon={
            <span style={{ marginRight: 8 }}>
              <Avatar size={16} src={`/images/flags/${lang}.svg`} />
            </span>
          }
        >
          {lang === "en" ? "English" : "German"}
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
          <Text ellipsis strong>
            {user.name}
          </Text>
        )}
        {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      </Space>
    </AntdLayout.Header>
  );
};


<%_ } _%>


