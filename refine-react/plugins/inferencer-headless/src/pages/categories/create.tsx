import { IResourceComponentsProps } from "@refinedev/core";
import { <%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
    return <<%- ((_app.inferencer ? _app.inferencer.componentPrefix : "") || "") _%>CreateInferencer />;
};
