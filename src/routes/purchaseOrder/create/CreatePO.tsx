import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideDrawer from "../../../component/sideDrawer/SideDrawer";
import { createNewPO, getCreatePOList } from "../api";
import { createPOHeader, poDrawerHeader } from "../constant";
import styles from "../PurchaseOrder.module.css";
import { CreatePOProps, poListProps } from "../type/CreatePOType";
import CreatePODetail from "./component/CreatePODetail";
import CreatePOHeader from "./component/CreatePoHeader";
import { Dayjs } from 'dayjs';
import { useNavigate } from "react-router-dom";

function CreatePO() {

  const navigate = useNavigate();
  
  const [poList, setPOList] = useState<poListProps>({totalAmount: 10, item: []})
  const [selectedPO, setSelectedPO] = useState<poListProps>({totalAmount: 0, item: []});
  const [drawerList, setDrawerList] = useState<poListProps>({totalAmount: 0, item: []});
  const [reviewState, setReviewState] = useState(false);
  const [site, setSite] = useState('');
  const [supplier, setSupplier] = useState('');
  const [date, setDate] = useState<Dayjs>();

  const getUpdatedItem = (list: poListProps, selectedItem: CreatePOProps) => {
    return list.item.filter(
      (item: CreatePOProps) => item.itemId !== selectedItem.itemId
    );
  }

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, selectedItem: CreatePOProps) => {
   
   const temp = {...selectedPO};
    if (event.target.checked) {
     
      temp.item = [...temp.item, selectedItem]
      setSelectedPO(temp);
    } else {
      const tempArr = getUpdatedItem(selectedPO, selectedItem)
      console.log("TEMP", temp)
      temp.item = tempArr
      setSelectedPO(temp);
    }
  };
  
  const itemRemoveHandler = (item: CreatePOProps) => {
    const temp = {...drawerList};
    const tempArr = getUpdatedItem(drawerList, item);
    temp.item = tempArr;
    setDrawerList(temp);
  }

  const selectAllItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      //ToDO
    }
  }

  const stateHandler = () => {
    setDrawerList(selectedPO);
    setReviewState(true);
  };

  const applyHandler = () => {
    setSelectedPO(drawerList);
    setReviewState(false);
  }
  
  const blurHandler = () => {
    const totalAmount = selectedPO.item.reduce((acc, cur) => {
      return acc = acc + cur.itemPrice * cur.itemQuantity;
    }, 0);
    setSelectedPO({...selectedPO, totalAmount})
  }

  const createPOHandler = () => {
    let currentDate = new Date()
    
    const param = {
      selectedP: selectedPO,
      poId: `${currentDate.toISOString().split('T')[0]}/${currentDate.getTime()}`,
      site,
      supplier
    }
    createNewPO(param);
    navigate('/');
    
  }

  const getDrawerData = () => {
    return(<>
      <div style={{minWidth: '380px'}}>X</div>
      <div>
        <Table>
        <TableHead>
            <TableRow>
              {poDrawerHeader.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
              {drawerList.item.map(item => (
                <TableRow key={item.itemId}>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemQuantity}</TableCell>
                <TableCell>{item.itemPrice}</TableCell>
                <TableCell onClick={()=>itemRemoveHandler(item)}>X</TableCell>
                 </TableRow>
              ))}
           
          </TableBody>
        </Table>
      </div>
      <div className={styles.sideDrawerFooter}>
        <div  className={styles.sideDrawerFooterText}>
          <span>Total Amount</span>
          <span>456</span>
        </div>
        <div className={styles.sideDrawerFooterButton}>
          <Button variant="outlined" fullWidth={true} onClick={() => setReviewState(false)}>Cancel</Button>
          <Button variant="contained" fullWidth={true} onClick={applyHandler}>Apply</Button>
        </div>
      </div>
      </>
    );
  }
  const getValue = async () => {
    const res = await getCreatePOList();
    setPOList(res);
  }

  useEffect(() => {
    getValue();
  });
  return (
    <div>
      <SideDrawer
        drawerState={reviewState}
        handleClose={() => setReviewState(false)}
        list={getDrawerData()}
        position="right"
      />
      <div className={styles.headContainer}>
        <CreatePOHeader
          stateHandler={stateHandler}
          selectedPO={selectedPO}
          createPOHandler={createPOHandler}
          handleSite={(value: any) => setSite(value)}
          handleSupplier={(value: any) => setSupplier(value)}
          handleDate={(value: Dayjs ) => setDate(value)}
          value={date}
        />
      </div>
      <div data-testid="amount">Total Amount: {poList.totalAmount}</div>
      <div className={styles.headContainer} style={{ marginTop: "30px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                //  indeterminate={true}
                onChange={selectAllItems}
                />
              </TableCell>
              {createPOHeader.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {poList.item.map((item) => (
             <CreatePODetail key={item.itemId} item={item} checkboxHandler={checkboxHandler} selectedPO={selectedPO} blurHandler={blurHandler} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CreatePO;
