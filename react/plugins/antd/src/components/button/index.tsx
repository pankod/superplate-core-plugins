import React from "react";
import { Button as BaseButton, ButtonProps } from "antd";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
  return (
        <BaseButton 
            {...rest}
            <%_ if (testing === 'testing-library') { _%>
            data-testid="btn" 
            <%_ } _%>
        />
    );
};
