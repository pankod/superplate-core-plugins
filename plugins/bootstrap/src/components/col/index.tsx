import React from "react";
import { Col as BaseCol, ColProps } from "react-bootstrap";

export type ICol = ColProps;

export const Col: React.FC<ICol> = ({ ...rest }) => {
    return <BaseCol {...rest} />;
};
