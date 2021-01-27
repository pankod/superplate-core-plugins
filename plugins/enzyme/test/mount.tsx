import React, { ReactNode } from "react";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";
<%- testSetup.import.join("\n") %>

<%
    var top = testSetup.wrapper.map(wrapper => wrapper[0] || "");
    var bottom = testSetup.wrapper.map(wrapper => wrapper[1] || "");
%>

/**
 * Custom renderer example with enzyme
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://enzymejs.github.io/enzyme/
 */

const AllTheProviders = ({ children }) => {
    <%- testSetup.inner.join("\n") %>

    return (
        <>
            <%- top.join("\n") %>
                {children}
            <%- bottom.join("\n") %>
        </>
    );
};


const mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (
    node,
    options,
) => {
    return mountBase(<AllTheProviders>{node}</AllTheProviders>, options);
};

// override render method
export default mount;
