import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./PurchaseOrder.module.css";
import { poData } from "../../mockData";
import { poHeader } from "./constant";

function PurchaseOrder(): JSX.Element {

  const navigate = useNavigate();
  return (
    <>
      <div className={styles.headContainer}>
        <Button variant="contained" onClick={()=>navigate('/create')}>Create PO</Button>
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
