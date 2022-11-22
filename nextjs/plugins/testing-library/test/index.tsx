import React, { ReactElement } from "react";
<% var testSetup = typeof testSetup === "undefined" ? {} : testSetup %>
<%- testSetup ? testSetup.import ? testSetup.import.join("\n") : "" : "" %>

<%
    var top = testSetup ? testSetup.wrapper ? testSetup.wrapper.map(wrapper => wrapper[0] || "") : [] : [];
    var bottom = testSetup ? testSetup.wrapper ? testSetup.wrapper.map(wrapper => wrapper[1] || "").reverse() : [] : [];
%>

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({ children }) => {
    <%- testSetup ? testSetup.inner ? testSetup.inner.join("\n") : "" : "" %>

    return (
        <>
            <%- top.join("\n") %>
                {children}
            <%- bottom.join("\n") %>
        </>
    );
};

// re-export everything
export * from "@testing-library/react";
