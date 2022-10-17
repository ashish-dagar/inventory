import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { fetchCreateTOList } from "../api";
import { createTOHeader } from "../constant";
import styles from "../transferOrder.module.css";
import { supplierPropd, toListProps } from "../transferOrderType";
import CreateTOHeader from "./component/CreateTOHeader";

function CreateTO(): JSX.Element {
  const [selectedTO, setSelectedTO] = useState<any>([]);
  const [toList, setTOList] = useState<toListProps[]>([]);
  const [site, setSite] = useState<supplierPropd>();
  const [supplier, setSupplier] = useState<supplierPropd>();

  const getCreateTOList = async () => {
    const list = await fetchCreateTOList();
    setTOList(list);
  };

  const createTOhandler = () => {
    console.log("params", selectedTO)
  }

  useEffect(() => {
    getCreateTOList();
  }, []);

  useEffect(() => {
    const newList = toList.filter((list) => list.site.id === site?.id);
    setTOList(newList);
  }, [site]);

  useEffect(() => {
    const newList = toList.filter((list) => list.supplier.id === supplier?.id);
    setTOList(newList);
  }, [supplier]);

  const getUpdatedItem = (list: any, selectedItem: any) => {
    return list.filter(
      (item: any) => item.toId !== selectedItem.toId
    );
  }

  const checkBoxHandler = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
    const temp = [...selectedTO];
    if (event.target.checked) {
     
      setSelectedTO([...temp, item])
     console.log(item);
    } else {
      const tempArr = getUpdatedItem(selectedTO, item)
      console.log("REMOVED EXCEPT", tempArr)
      setSelectedTO(tempArr)
    }
  }

  return (
    <div>
      <div className={styles.headContainer}>
        <CreateTOHeader
          handleSite={(value: any) => setSite(value)}
          handleSupplier={(value: any) => setSupplier(value)}
          createTOhandler={createTOhandler} 
        />
      </div>
      <div className={styles.headContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              {createTOHeader.map((item) => {
                return <TableCell>{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {toList.map((item: toListProps) => {
              return (
                <TableRow key={item.toId}>
                  <TableCell>
                    <Checkbox onChange={(event) => checkBoxHandler(event, item)}/>
                  </TableCell>
                  <TableCell>{item.toId}</TableCell>
                  <TableCell>{item.itemQuantity}</TableCell>
                  <TableCell>{item.itemDate}</TableCell>
                  <TableCell>{item.totalAmount}</TableCell>
                  <TableCell>:</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default CreateTO;
