import {
  Button,
 // Table,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./PurchaseOrder.module.css";
import { poData } from "../../mockData";
import { poContentLabel, poHeader } from "./constant";
import Table from "../../component/Table/Table";
import React from "react";

function PurchaseOrder(): JSX.Element {

  const navigate = useNavigate();
  return (
    <>
      <div className={styles.headContainer}>
        <Button variant="contained" onClick={()=>navigate('/create')}>Create PO</Button>
      </div>
      <div className={styles.bodyContainer}>
        <Table
          tableHeader={poHeader}
          tableContent={poData}
          tableLabel={poContentLabel}
          checkBoxCallBackHandler={(event: any, item: any)=> console.log(event, item)}
        />
      </div>
    </>
  );
}

export default PurchaseOrder;
