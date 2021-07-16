import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";

import { Card as CssCard } from "../card/index";

export default {
    title: "Card",
    component: CssCard,
    decorators: [withKnobs],
};

export const DynamicVariables = () => {
    const label = select("title", ["Title 1", "Title 2"], "Title Test");
    return (
        <div style={{ width: "25%" }}>
            <CssCard title={label}>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quasi quidem culpa adipisci eveniet ipsa ea incidunt
                    corrupti vero perferendis blanditiis!
                </div>
            </CssCard>
        </div>
    );
};
