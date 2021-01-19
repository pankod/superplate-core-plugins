import React from "react";
import { Github, Linkedin, Twitter, Youtube } from "@components/icons";

export const SvgrExample: React.FC = () => {
    return (
        <div>
            <Github width={32} height={32} color="black" />
            <Linkedin width={32} height={32} color="black" />
            <Twitter width={32} height={32} color="black" />
            <Youtube width={32} height={32} color="black" />
        </div>
    );
};
