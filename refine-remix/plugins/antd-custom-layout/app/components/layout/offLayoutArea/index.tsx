import React from "react";
<%_ if (answers[`command-palette`] === "kbar") { _%>
import { RefineKbar } from "@pankod/refine-kbar";
<%_ } _%>

<%_ if (answers[`command-palette`] === "kbar") { _%>
export const OffLayoutArea: React.FC = () => {
    return <RefineKbar />;
};
<%_ } else { _%>
export const OffLayoutArea: React.FC = () => null;
<%_ } _%>

