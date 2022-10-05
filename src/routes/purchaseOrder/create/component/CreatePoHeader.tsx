import {
  Autocomplete,
  Button,
  TextField
} from "@mui/material";
import React from "react";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


import { siteData, supplierData } from "../../../../mockData";

interface CreatePoHeaderProps {
  stateHandler: () => void;
  selectedPO: any;
  createPOHandler: any;
  handleSite: any;
  handleSupplier: any;
  handleDate: any;
  value: any
}
function CreatePOHeader({stateHandler, selectedPO, createPOHandler,handleSite, handleSupplier, handleDate, value}: CreatePoHeaderProps): JSX.Element {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Autocomplete
            options={siteData}
            renderInput={(params) => <TextField {...params} label="Site" />}
            onChange={(event, value) => handleSite(value)}
            sx={{ width: 300 }}
          />
          <Autocomplete
            options={supplierData}
            renderInput={(params) => <TextField {...params} label="Supplier" />}
            onChange={(event, value) => handleSupplier(value)}
            sx={{ width: 300 }}
          />

<LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
         
          <Button variant="contained" onClick={createPOHandler}>Create PO</Button>
          <Button variant="contained" onClick={stateHandler} disabled={selectedPO.item.length < 1}>
            Review Basket
          </Button>
    </div>
  );
}

export default CreatePOHeader;