"use client";

import { Header } from "@components/header";
import { 
        ThemedLayoutV2,
        <%_ if (selectedSvg || selectedTitle) { _%>
        ThemedTitleV2
        <%_ } _%>
    } from "@refinedev/mui";
import React from "react";
<%_ if (selectedSvg) { _%>
    import { AppIcon } from "@components/app-icon";
<%_ } _%>

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <ThemedLayoutV2 Header={() => <Header sticky />}
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
            {children}
        </ThemedLayoutV2>
    );
};
