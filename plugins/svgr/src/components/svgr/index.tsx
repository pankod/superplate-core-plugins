import React from "react";
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
} from "@components/icons";

export const SvgrExample: React.FC = () => {
    return (
        <div>
            <GithubIcon width={32} height={32} color="black" />
            <LinkedinIcon width={32} height={32} color="black" />
            <TwitterIcon width={32} height={32} color="black" />
            <YoutubeIcon width={32} height={32} color="black" />
            <NextjsIcon width={64} height={32} color="black" />
            <PankodIcon width={96} height={32} color="black" />
        </div>
    );
};
