import React from 'react';
import { Autocomplete, Button, TextField } from "@mui/material";
import { siteData, supplierData } from "../../../../mockData";

function CreateTOHeader({handleSite, handleSupplier, createTOhandler}: any): JSX.Element {
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
        renderInput={(params) => <TextField {...params} label="Site" />}
        onChange={(event, value) => handleSupplier(value)}
        sx={{ width: 300 }}
      />
      <Autocomplete
        options={[
          { label: "Noida", id: 1 },
          { label: "Delhi", id: 2 },
        ]}
        renderInput={(params) => <TextField {...params} label="Site" />}
        onChange={(event, value) => console.log("value", value)}
        sx={{ width: 300 }}
      />
      <Button variant="contained" onClick={createTOhandler}>Create TO</Button>
      {/* <Button
        variant="contained"
        onClick={stateHandler}
        disabled={selectedPO.item.length < 1}
      >
        Review Basket
      </Button> */}
    </div>
  );
}

export default CreateTOHeader;
