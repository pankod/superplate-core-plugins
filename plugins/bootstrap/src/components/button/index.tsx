import React from "react";
import {
  Button as BaseButton,
  ButtonGroup,
  ButtonProps,
} from "react-bootstrap";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
  return <BaseButton {...rest} />;
};
