<%_ if (answers["antd-dark-mode"] === "antd-dark-mode") { _%>
import { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Avatar,
  Typography,
  Switch,
} from "@pankod/refine-antd";
import { ColorModeContext } from "@contexts";

const { Text } = Typography;

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const { mode, setMode } = useContext(ColorModeContext);

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

import { useGetIdentity } from "@pankod/refine-core";
import {
  AntdLayout,
  Space,
  Avatar,
  Typography,
} from "@pankod/refine-antd";

const { Text } = Typography;

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();

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