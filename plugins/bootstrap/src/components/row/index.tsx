import React from "react";
import { Row as BaseRow, RowProps } from "react-bootstrap";

export type IRow = RowProps;

export const Row: React.FC<IRow> = ({ ...rest }) => {
  return <BaseRow {...rest} />;
};
