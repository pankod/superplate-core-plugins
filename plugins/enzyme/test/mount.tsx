import React, { ReactNode } from "react";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";
<%- _app.import.join("\n") %>
<%
    var half = Math.floor(_app.wrapper.length / 2)
    var openings = _app.wrapper.slice(0, half);
    var closings = _app.wrapper.slice(half);
%>

/**
 * Custom renderer example with enzyme
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://enzymejs.github.io/enzyme/
 */

const AllTheProviders = ({ children }) => {
    <%- _app.inner.join("\n") %>

    return (
        <>
            <%- openings.join("\n") %>
                {children}
            <%- closings.join("\n") %>
        </>
    );
};


const mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (
  node,
  options
) => {
  return mountBase(<AllTheProviders>{node}</AllTheProviders>, options);
};

// override render method
export default mount;
