import { IResourceComponentsProps } from "@refinedev/core";
import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

<%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
import { inferencerPredefinedMeta } from "../../inferencerPredefinedMeta";
<%_ } _%>

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer 
    <%_ if (answers["data-provider"] === 'data-provider-hasura') { _%>
    meta={inferencerPredefinedMeta}
    <%_ } _%>
    />;
};
