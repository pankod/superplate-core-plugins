import { IResourceComponentsProps } from "@refinedev/core";
import { <%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductShow: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer />;
};
