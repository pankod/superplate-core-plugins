import React from "react";
import { Container as BaseContainer, ContainerProps } from "react-bootstrap";

export type IContainer = ContainerProps;

export const Container: React.FC<IContainer> = ({ ...rest }) => {
    return <BaseContainer {...rest} />;
};
