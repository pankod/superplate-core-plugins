import React from "react";
import { Button as BaseButton } from "antd";
import { ButtonProps } from "antd/lib/button";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return <BaseButton {...rest} />;
};
