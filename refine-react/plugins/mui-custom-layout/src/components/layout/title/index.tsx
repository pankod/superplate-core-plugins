import React from "react";
import { TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-react-router-v6";

const { Link } = routerProvider;

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img
                        src="/refine-collapsed.svg"
                        alt="Refine"
                        width="28px"
                    />
                ) : (
                    <img src="/refine.svg" alt="Refine" width="140px" />
                )}
            </Link>
        </Button>
    );
};
