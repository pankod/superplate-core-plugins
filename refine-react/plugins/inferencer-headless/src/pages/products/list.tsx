
import { IResourceComponentsProps } from "@pankod/refine-core";
import { <%- (_app.inferencer.componentPrefix || "") _%>ListInferencer } from "@pankod/refine-inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductList: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ListInferencer />;
};