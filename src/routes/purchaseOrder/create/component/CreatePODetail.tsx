import {
  TextField,
  Checkbox,
  TableCell,
  TableRow,
} from "@mui/material";
import { useState } from "react";
interface CreatePODetailProps {
  item: any;
  checkboxHandler: any;
  selectedPO: any
}
function CreatePODetail({item, checkboxHandler, selectedPO}:CreatePODetailProps) {
  const [quantity, setQuantity] = useState<number>(0);
  
  const itemQuantityHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value);
    item['itemQuantity'] = event.currentTarget.value;
    setQuantity(Number(event.currentTarget.value))
  }

  return (
    <TableRow key={item.itemId}>
    <TableCell>
      <Checkbox
        checked={selectedPO.filter((i: any) => i.itemId === item.itemId).length > 0}
        onChange={(event) => checkboxHandler(event, item)}
      /> 
    </TableCell>
   
    <TableCell align="left">{item.itemName}</TableCell>
    <TableCell align="left">
      <TextField
        value={quantity ? quantity : ''}
        onChange={(event) => itemQuantityHandler(event)}
        type= 'number'
      />
    </TableCell>
    <TableCell align="left">{item.itemUnit}</TableCell>
    <TableCell align="left">{item.itemPrice}</TableCell>
    <TableCell align="left">100</TableCell>
  </TableRow>
  );
}

export default CreatePODetail;