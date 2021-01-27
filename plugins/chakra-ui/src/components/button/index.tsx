import React from "react";
import { Button as BaseButton, ButtonProps } from "@chakra-ui/react";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return (
        <div>
            <BaseButton 
                {...rest}
                <%_ if (testing === 'testing-library') { _%>
                data-testid="btn"
                <%_ } _%>
            />
        </div>
      );
};
