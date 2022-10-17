import { TextField, Checkbox, TableCell, TableRow } from "@mui/material";

export default function CreateGRDetail({
  item,
  checkboxHandler,
  selectedPO,
  blurHandler,
}: any) {
  return (
    <TableRow key={item.itemId}>
      <TableCell>
        <Checkbox
          // checked={
          //   // selectedPO.item.filter((i: any) => i.grId === item.grId)
          //   //   .length > 0
          // }
          onChange={(event) => checkboxHandler(event, item)}
        />
      </TableCell>
      <TableCell align="left">{item.supplier.label}</TableCell>
      <TableCell align="left">{item.date}</TableCell>
      <TableCell align="left">{item.amount}</TableCell>
    </TableRow>
  );
}
