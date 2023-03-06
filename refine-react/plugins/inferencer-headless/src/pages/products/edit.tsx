import { IResourceComponentsProps } from "@pankod/refine-core";
import { <%- (_app.inferencer.componentPrefix || "") _%>EditInferencer } from "@pankod/refine-inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductEdit: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>EditInferencer />;
};
