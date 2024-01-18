import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from "@refinedev/mui";
import { Outlet } from "@remix-run/react";
import { Header } from "~/components/header";

export default function BaseLayout() {
    return (
        <ThemedLayoutV2
            Header={() => <Header sticky />}
            Sider={(props) => <ThemedSiderV2 {...props} fixed />}
            <%_ if (selectedSvg || selectedTitle) { _%>
            Title={({ collapsed }) => (
                <ThemedTitleV2
                    collapsed={collapsed}
                <%_ if (selectedTitle) { _%>
                    text="<%= selectedTitle %>"
                <%_ } _%>
                <%_ if (selectedSvg) { _%>
                    icon={<AppIcon />}
                <%_ } _%>
                />
            )}
        <%_ } _%>
    >
            <Outlet />
        </ThemedLayoutV2>
    );
}

