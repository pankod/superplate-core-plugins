import React, { ReactNode } from "react";
import { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";
<%- testSetup.import.join("\n") %>

<%
    var half = Math.floor(testSetup.wrapper.length / 2)
    var openings = testSetup.wrapper.slice(0, half);
    var closings = testSetup.wrapper.slice(half);
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
            <%- openings.join("\n") %>
                {children}
            <%- closings.join("\n") %>
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
