import {
  Autocomplete,
  Button,
  TextField,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import SideDrawer from "../../../component/sideDrawer/SideDrawer";
import { orderItem, siteData, supplierData } from "../../../mockData";
import { createPOHeader, poDrawerHeader } from "../constant";
import styles from "../PurchaseOrder.module.css";
import CreatePODetail from "./component/CreatePODetail";
import CreatePOHeader from "./component/CreatePoHeader";

interface CreatePOProps {
  itemName: String;
  itemId: number;
  itemPrice: number;
  itemUnit: String;
  itemQuantity: number;
  totalAmount: number;
}
function CreatePO() {
  const [selectedPO, setSelectedPO] = useState<CreatePOProps[]>([]);
  const [reviewState, setReviewState] = useState(false);

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, selectedItem: CreatePOProps) => {
    console.log("pp", selectedItem)
   // console.log(event.target.checked);
    if (event.target.checked) {
      setSelectedPO([...selectedPO, selectedItem]);
    } else {
      const temp = selectedPO.filter(
        (item: CreatePOProps) => item.itemId !== selectedItem.itemId
      );
      console.log("TEMP", temp)
      setSelectedPO(temp);
    }
  };

  const selectAllItems = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      //ToDO
    }
  }

  const stateHandler = () => {
    setReviewState(true);
  };

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
            
              {selectedPO.map(item => (
                <TableRow key={item.itemId}>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.itemQuantity}</TableCell>
                <TableCell>{item.itemPrice}</TableCell>
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
          <Button variant="contained" fullWidth={true}>Apply</Button>
        </div>
      </div>
      </>
    );
  }
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
        />
      </div>
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
            {orderItem.map((item) => (
             <CreatePODetail item={item} checkboxHandler={checkboxHandler} selectedPO={selectedPO} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CreatePO;
