import React from "react";
import { TitleProps } from "@pankod/refine-core";
<%_ if (answers["router-provider"] === "react-router-v6") { _%>
  import routerProvider from "@pankod/refine-react-router-v6";
<%_ } else if (answers["router-provider"] === "react-location") { _%>
  import routerProvider from "@pankod/refine-react-location";
<%_ } _%>
    
const { Link } = routerProvider;
    
export const Title: React.FC<TitleProps> = ({ collapsed }) => (
<Link to="/">
{collapsed ? (
  <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  >
  <img
  src="https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"
  alt="Refine"
  style={{
    margin: "0 auto",
    padding: "12px 0",
    maxHeight: "65.5px",
  }}
  />
  </div>
  ) : (
    <img
    src="https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine.svg"
    alt="Refine"
    style={{
      width: "200px",
      padding: "12px 24px",
    }}
    />
    )}
  </Link>
);
          