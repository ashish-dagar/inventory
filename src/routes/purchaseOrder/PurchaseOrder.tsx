import styles from "./PurchaseOrder.module.css";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { poData } from "../../mockData";
import { poHeader } from "./constant";

function PurchaseOrder(): JSX.Element {
  return (
    <>
      <div className={styles.headContainer}>
        <Button variant="contained">Create PO</Button>
      </div>
      <div className={styles.bodyContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Checkbox />
              </TableCell>
              {poHeader.map(item => (
                <TableCell align="left">{item}</TableCell>
              ))}
              {/* <TableCell align="left">PO ID</TableCell>
              <TableCell align="left">STATUS</TableCell>
              <TableCell align="left">PO Created Date</TableCell>
              <TableCell align="left">Amount</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {poData.map((item) => (
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.poId}</TableCell>
                <TableCell>{item.poStatus}</TableCell>
                <TableCell>{item.poCreatedDate}</TableCell>
                <TableCell>{item.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default PurchaseOrder;
