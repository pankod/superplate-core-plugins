import React from "react";
import { BaseButton } from "./styled";

export const Button: React.FC = ({ ...rest }) => {
    return <BaseButton {...rest} />;
};