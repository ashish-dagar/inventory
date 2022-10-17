import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../component/Table/Table";
import { goodReceivedOrderItem } from "../../mockData";
import { goodReceivedContentLabel, goodReceivedHeader } from "./constant";
import styles from './GoodReceived.module.css';

export default function GoodReceived(): JSX.Element {

  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.headContainer}>
        <Button variant="contained" onClick={()=>navigate('/createGoodsOrder')}>Create Good Received</Button>
      </div>

      <div className={styles.bodyContainer}>
        <Table
          tableHeader={goodReceivedHeader}
          tableContent={goodReceivedOrderItem}
          tableLabel={goodReceivedContentLabel}
          checkBoxCallBackHandler={(event: any, item: any)=> console.log(event, item)}
        />
      </div>
    </div>
  )
}