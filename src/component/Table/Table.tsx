import {Table} from "@mui/material";
import React from "react";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

function CustomTable(props: any): JSX.Element {
  const {tableContent, tableLabel, tableHeader, checkBoxCallBackHandler} = props;
  return (
   <Table>
    <TableHeader
      tableHeader={tableHeader}
      checkBoxAllCallBackFn={() => console.log("FN CALLEDDDDDDDDD----")}
    />
    <TableContent
      tableContent={tableContent}
      tableLabel={tableLabel}
      checkBoxCallBackFn={checkBoxCallBackHandler}
    />
   </Table> 
  );
}

export default CustomTable;