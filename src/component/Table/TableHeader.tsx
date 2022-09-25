import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

function TableHeader(props: any): JSX.Element {
  const {checkBoxAllCallBackFn, tableHeader} = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell><Checkbox onChange={checkBoxAllCallBackFn}/></TableCell>
        {tableHeader.map((item: any) => {
          return (
            <TableCell>{item}</TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader;