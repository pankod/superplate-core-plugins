import React from "react";
import { Github, Linkedin } from "@components/icons";

export const SvgrExample: React.FC = () => {
    return (
        <div>
            <Github width={64} height={64} color="black" />
            <Linkedin width={32} height={32} color="black" />
        </div>
    );
};
