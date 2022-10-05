import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

function TableContent(props: any): JSX.Element {
  const getTableCell = (item: any, contentLabels: any, props: any) => {
    const { checkBoxCallBackFn } = props;
    return (
      contentLabels &&
      contentLabels.map((col: any) => {
        const type = col.type;
        let ele ;
        const cellData = item[col.name];
        switch (type) {
          case "text":
            ele = <TableCell>{cellData}</TableCell>;
            break;
          case "checkBox":
            ele = (
              <TableCell>
                <Checkbox onChange={(event)=>checkBoxCallBackFn(event, item)}  />
              </TableCell>
            );
        }
        return ele;
      })
    );
  };

  const getTableContent = (props: any) => {
    const { tableContent, tableLabel } = props;
    let row = [];
    row = tableContent.map((item: any) => {
      return <TableRow>{getTableCell(item, tableLabel, props)}</TableRow>;
    });
    return row;
  };
  return <TableBody>{getTableContent(props)}</TableBody>;
}

export default TableContent;
