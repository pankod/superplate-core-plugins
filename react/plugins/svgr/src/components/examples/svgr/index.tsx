import React from "react";
import {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    ReactIcon,
    PankodIcon,
} from "components/icons";

export const SvgrExample: React.FC = () => {
    return (
        <div>
            <GithubIcon width={32} height={32} color="black" />
            <LinkedinIcon width={32} height={32} color="black" />
            <TwitterIcon width={32} height={32} color="black" />
            <YoutubeIcon width={32} height={32} color="black" />
            <ReactIcon width={96} height={58} color="black" />
            <PankodIcon width={140} height={28} color="black" />
        </div>
    );
};
