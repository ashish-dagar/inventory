export interface transferOrderListProps {
  poId: number;
  toStatus: string;
  poCreatedDate: string;
  toCreatedDate: string;
  amount: number;
}

export interface toListItemProps {
  itemName: string;
  itemId: number;
  itemPrice: number;
  itemUnit: string;
  itemQuantity: number;
  itemAmount: number;
}

export interface toListProps {
  totalAmount: number;
  itemQuantity: number;
  toId: number;
  itemDate: string;
  item: toListItemProps[];
  site: {label: string, id:number};
  supplier: {label: string, id: number};
}

export interface supplierPropd {
  label: string;
  id: number
}