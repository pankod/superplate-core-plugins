import { IResourceComponentsProps } from "@refinedev/core";
import { <%- (_app.inferencer.componentPrefix || "") _%>EditInferencer } from "@refinedev/inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductEdit: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>EditInferencer />;
};
