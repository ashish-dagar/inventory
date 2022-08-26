import {
  Autocomplete,
  Button,
  TextField
} from "@mui/material";
import { orderItem, siteData, supplierData } from "../../../../mockData";

interface CreatePoHeaderProps {
  stateHandler: () => void;
}
function CreatePOHeader({stateHandler}: CreatePoHeaderProps): JSX.Element {

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Autocomplete
            options={siteData}
            renderInput={(params) => <TextField {...params} label="Site" />}
            onChange={(event, value) => console.log("value", value)}
            sx={{ width: 300 }}
          />
          <Autocomplete
            options={supplierData}
            renderInput={(params) => <TextField {...params} label="Site" />}
            onChange={(event, value) => console.log("value", value)}
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
          <Button variant="contained">Create PO</Button>
          <Button variant="contained" onClick={stateHandler}>
            Review Basket
          </Button>
        </div>
  );
}

export default CreatePOHeader;