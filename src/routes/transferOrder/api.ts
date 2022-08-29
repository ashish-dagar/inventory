import { TOItem, transferOrderItem } from "../../mockData";

export const fetchTransferOrderList = () => {
  return Promise.resolve(transferOrderItem);
};

export const fetchCreateTOList = () => {
  return Promise.resolve(TOItem);
};