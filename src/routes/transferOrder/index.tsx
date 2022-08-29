import { useEffect, useState } from 'react';
import { Button, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { transferOrderHeader } from './constant';
import styles from './transferOrder.module.css';
import { transferOrderListProps } from './transferOrderType';
import { fetchTransferOrderList } from './api';
import { useNavigate } from 'react-router-dom';

function TransferOrder(): JSX.Element {
  const navigate = useNavigate();
  const [transferOrderList, setTransferOrderList] = useState<transferOrderListProps[]>([]);

  const getTransferList = async () => {
    const list = await fetchTransferOrderList();
    setTransferOrderList(list);
  }
  useEffect(() => {
    getTransferList();
  });

  return (<>
    <div className={styles.headContainer}>
        <Button variant="contained" onClick={()=>navigate('/createTransferOrder')}>Create TO</Button>
      </div>
    <div className={styles.bodyContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Checkbox />
            </TableCell>
            {transferOrderHeader.map((item: any) => {
              return (
                <TableCell key={item} align="left">{item}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
          <TableBody>
            {transferOrderList.map((item: transferOrderListProps) => {
              return (
                <TableRow key={item.poId}>
                  <TableCell><Checkbox /></TableCell>
                  <TableCell>{item.poId}</TableCell>
                  <TableCell>{item.toStatus}</TableCell>
                  <TableCell>{item.poCreatedDate}</TableCell>
                  <TableCell>{item.toCreatedDate}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
      </Table>
    </div>
    </>
    );
}

export default TransferOrder;