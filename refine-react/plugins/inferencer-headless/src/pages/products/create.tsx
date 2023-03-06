import { IResourceComponentsProps } from "@pankod/refine-core";
import { <%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer } from "@pankod/refine-inferencer/<%- (_app.inferencer.folder || "") _%>";

export const ProductCreate: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>CreateInferencer />;
};
