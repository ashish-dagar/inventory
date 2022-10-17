import { useEffect, useState } from "react";
import {
  Button
} from "@mui/material";

import { toContentLabel, transferOrderHeader } from "./constant";
import styles from "./transferOrder.module.css";
import { transferOrderListProps } from "./transferOrderType";
import { fetchTransferOrderList } from "./api";
import { useNavigate } from "react-router-dom";
import Table from "../../component/Table/Table";

function TransferOrder(): JSX.Element {
  const navigate = useNavigate();
  const [transferOrderList, setTransferOrderList] = useState<
    transferOrderListProps[] | any
  >([]);

  const getTransferList = async () => {
    const list = await fetchTransferOrderList();
    setTransferOrderList(list);
  };
  useEffect(() => {
    getTransferList();
  });

  return (
    <>
      <div className={styles.headContainer}>
        <Button
          variant="contained"
          onClick={() => navigate("/createTransferOrder")}
        >
          Create TO
        </Button>
      </div>
      <div className={styles.bodyContainer}>
        <Table
          tableHeader={transferOrderHeader}
          tableContent={transferOrderList}
          tableLabel={toContentLabel}
        />
      </div>
    </>
  );
}

export default TransferOrder;
