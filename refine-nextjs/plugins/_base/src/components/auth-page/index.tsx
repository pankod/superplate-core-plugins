"use client";
<%_ if (answers["ui-framework"] === 'antd') { _%>
  import {
          AuthPage as AuthPageBase,
      } from "@refinedev/antd";
  <%_ } _%>
  <%_ if (answers["ui-framework"] === 'mui') { _%>
  import {
          AuthPage as AuthPageBase,
      } from "@refinedev/mui";
  <%_ } _%>
  <%_ if (answers["ui-framework"] === "no" || answers["ui-framework"] === "tailwindcss") { _%>
  import { AuthPage as AuthPageBase } from "@refinedev/core";
  <%_ } _%>
  import type { AuthPageProps } from '@refinedev/core'
  
  
  export const AuthPage = (props: AuthPageProps) => {
  
      return (
          <AuthPageBase
              {...props}
              <%- (_app.authPageProps || []).join("\n") %>
          />
      );
  }
  