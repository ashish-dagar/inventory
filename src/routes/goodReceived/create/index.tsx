import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { createGoodReceivedItems } from "../../../mockData";
import styles from "../GoodReceived.module.css";
import CreateGRHeader from "./component/CreateGRHeader";
import { createGRHeader } from "../constant";
import CreateGRDetail from "./component/CreateGRDetail";

export default function CreateGoodReceived() {
  const [selectedGROrder, setSelectedGROrder] = useState<any>([]);
  const [site, setSite] = useState("");
  const [supplier, setSupplier] = useState("");
  const [date, setDate] = useState<Dayjs>();

  const createGRhandler = () => {};

  const checkboxHandler = () => {};

  const blurHandler = () => {};

  // useEffect(() => {
  //   setSelectedGROrder(createGoodReceivedItems);
  // });

  return (
    <div>
      <div className={styles.headContainer}>
        <CreateGRHeader
          handleSite={(value: any) => setSite(value)}
          handleSupplier={(value: any) => setSupplier(value)}
          createTOhandler={createGRhandler}
          handleDate={(value: Dayjs) => setDate(value)}
          value={date}
        />
      </div>

      <div className={styles.headContainer} style={{ marginTop: "30px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                //  indeterminate={true}
                // onChange={selectAllItems}
                />
              </TableCell>
              {createGRHeader.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {createGoodReceivedItems.map((item) => (
              <CreateGRDetail
                key={item.grId}
                item={item}
                checkboxHandler={checkboxHandler}
                selectedPO={selectedGROrder}
                blurHandler={blurHandler}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
