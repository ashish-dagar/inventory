export interface CreatePOProps {
    itemName: String;
    itemId: number;
    itemPrice: number;
    itemUnit: String;
    itemQuantity: number;
    itemAmount: number;
  }
  
  export interface poListProps {
    totalAmount: number;
    item: CreatePOProps[]
  }