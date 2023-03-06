import { IResourceComponentsProps } from "@pankod/refine-core";
import { <%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer } from "@pankod/refine-inferencer/<%- (_app.inferencer.folder || "") _%>";

export const CategoryShow: React.FC<IResourceComponentsProps> = () => {
    return <<%- (_app.inferencer.componentPrefix || "") _%>ShowInferencer />;
};
