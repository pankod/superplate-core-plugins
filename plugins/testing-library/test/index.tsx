import React, { ReactElement } from "react";
import {
    render as baseRender,
    RenderOptions,
    RenderResult,
} from "@testing-library/react";
<%- testSetup.import.join("\n") %>

<%
    var half = Math.floor(testSetup.wrapper.length / 2)
    var openings = testSetup.wrapper.slice(0, half);
    var closings = testSetup.wrapper.slice(half);
%>

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({ children }) => {
    <%- testSetup.inner.join("\n") %>

    return (
        <>
            <%- openings.join("\n") %>
                {children}
            <%- closings.join("\n") %>
        </>
    );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
    baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult;

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
