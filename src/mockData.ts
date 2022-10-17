export const poData = [
  {
    poId: '1',
    poStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    amount: '2504',
  },
  {
    poId: '2',
    poStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    amount: '2504',
  },
  {
    poId: '3',
    poStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    amount: '2504',
  },
  {
    poId: '4',
    poStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    amount: '2504',
  }
];

export const poDataNew = [
  {
    "selectedP": {
        "totalAmount": 410,
        "item": [
            {
                "itemName": "tomato",
                "itemId": 1,
                "itemPrice": 20,
                "itemUnit": "Kg",
                "itemQuantity": "12",
                "itemAmount": 0
            },
            {
                "itemName": "potato",
                "itemId": 2,
                "itemPrice": 10,
                "itemUnit": "Kg",
                "itemQuantity": "10",
                "itemAmount": 0
            },
            {
                "itemName": "ppepsi",
                "itemId": 6,
                "itemPrice": 70,
                "itemUnit": "lt",
                "itemQuantity": "1",
                "itemAmount": 0
            }
        ]
    },
    "poId": "2022-10-05/1664975519779",
    "site": {
        "label": "Noida",
        "id": 1
    },
    "supplier": {
        "label": "Delhi",
        "id": 2
    }
}
];

export const siteData = [
  {label: 'Noida', id: 1},
  {label: 'Delhi', id: 2},
  {label: 'GuruGram', id: 3},
  {label: 'Greater Noida', id: 4}
];

export const supplierData = [
  {label: 'Noida', id: 1},
  {label: 'Delhi', id: 2},
  {label: 'GuruGram', id: 3},
  {label: 'Greater Noida', id: 4}
];

export const orderItem = {
  totalAmount: 100,
  item: [
  {
    itemName: 'tomato',
    itemId: 1,
    itemPrice: 20,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'potato',
    itemId: 2,
    itemPrice: 10,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'cheese',
    itemId: 3,
    itemPrice: 200,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'ladyFinger',
    itemId: 7,
    itemPrice: 15,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'cabbage',
    itemId: 4,
    itemPrice: 2,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'chilli',
    itemId: 5,
    itemPrice: 40,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'ppepsi',
    itemId: 6,
    itemPrice: 70,
    itemUnit: 'lt',
    itemQuantity: 0,
    itemAmount: 0
  }]
};
///////////////////////Transfer Order ////////////////////////


export const transferOrderItem = [
  {
    toId: 1,
    poId: 1,
    toStatus: 'SUCCESS',
    totalAmount: 100,
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2510,
    itemQuantity: 7,
    itemDate: '08-08-2022',
    site: {label: 'Noida', id: 1},
    supplier: {label: 'GuruGram', id: 3},
    item: [
    {
      itemName: 'cheese',
      itemId: 3,
      itemPrice: 200,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'chilli',
      itemId: 5,
      itemPrice: 40,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'ppepsi',
      itemId: 6,
      itemPrice: 70,
      itemUnit: 'lt',
      itemQuantity: 0,
      itemAmount: 0
    }]
  },
  {
    poId: 1,
    toStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 2,
    toStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 3,
    toStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 4,
    toStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2504,
  }
];

export const TOItem = [
  {
    toId: 1,
    totalAmount: 100,
    itemQuantity: 7,
    itemDate: '08-08-2022',
    site: {label: 'Noida', id: 1},
    supplier: {label: 'GuruGram', id: 3},
    item: [
    {
      itemName: 'tomato',
      itemId: 1,
      itemPrice: 20,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'potato',
      itemId: 2,
      itemPrice: 10,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'cheese',
      itemId: 3,
      itemPrice: 200,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'ladyFinger',
      itemId: 7,
      itemPrice: 15,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'cabbage',
      itemId: 4,
      itemPrice: 2,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'chilli',
      itemId: 5,
      itemPrice: 40,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'ppepsi',
      itemId: 6,
      itemPrice: 70,
      itemUnit: 'lt',
      itemQuantity: 0,
      itemAmount: 0
    }]
  },
  {
  toId: 2,
  totalAmount: 100,
  itemQuantity: 3,
  itemDate: '08-08-2022',
  site:  {label: 'Delhi', id: 2},
  supplier: {label: 'Greater Noida', id: 4},
  item: [
  {
    itemName: 'tomato',
    itemId: 1,
    itemPrice: 20,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'potato',
    itemId: 2,
    itemPrice: 10,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'cheese',
    itemId: 3,
    itemPrice: 200,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  }
  ]
  }
]

export const mockOrderItem = {
  totalAmount: 100,status: 200,
  statusText: 'Ok',
  headers: {},
  config: {},
  item: [
  {
    itemName: 'tomato',
    itemId: 1,
    itemPrice: 20,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'potato',
    itemId: 2,
    itemPrice: 10,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'cheese',
    itemId: 3,
    itemPrice: 200,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'ladyFinger',
    itemId: 7,
    itemPrice: 15,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'cabbage',
    itemId: 4,
    itemPrice: 2,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'chilli',
    itemId: 5,
    itemPrice: 40,
    itemUnit: 'Kg',
    itemQuantity: 0,
    itemAmount: 0
  },
  {
    itemName: 'ppepsi',
    itemId: 6,
    itemPrice: 70,
    itemUnit: 'lt',
    itemQuantity: 0,
    itemAmount: 0
  }]
};

///////////////////////Good Received Order ////////////////////////

export const goodReceivedOrderItem = [
  {
    poId: 1,
    GRStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    GRCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 2,
    GRStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    GRCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 3,
    GRStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    GRCreatedDate: '08-08-2022',
    amount: 2504,
  },
  {
    poId: 4,
    GRStatus: 'SUCCESS',
    poCreatedDate: '08-08-2022',
    GRCreatedDate: '08-08-2022',
    amount: 2504,
  }
];

export const createGoodReceivedItems = [
  {
    toId: 1,
    poId: 1,
    grId: 1,
    toStatus: 'SUCCESS',
    totalAmount: 100,
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2510,
    itemQuantity: 7,
    itemDate: '08-08-2022',
    site: {label: 'Noida', id: 1},
    supplier: {label: 'GuruGram', id: 3},
    item: [
    {
      itemName: 'cheese',
      itemId: 3,
      itemPrice: 200,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'chilli',
      itemId: 5,
      itemPrice: 40,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'ppepsi',
      itemId: 6,
      itemPrice: 70,
      itemUnit: 'lt',
      itemQuantity: 0,
      itemAmount: 0
    }]
  },
  {
    toId: 2,
    poId: 2,
    grId: 2,
    toStatus: 'SUCCESS',
    totalAmount: 100,
    poCreatedDate: '08-08-2022',
    toCreatedDate: '08-08-2022',
    amount: 2510,
    itemQuantity: 7,
    itemDate: '08-08-2022',
    site: {label: 'Noida', id: 1},
    supplier: {label: 'GuruGram', id: 3},
    item: [
    {
      itemName: 'cheese',
      itemId: 3,
      itemPrice: 200,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'chilli',
      itemId: 5,
      itemPrice: 40,
      itemUnit: 'Kg',
      itemQuantity: 0,
      itemAmount: 0
    },
    {
      itemName: 'ppepsi',
      itemId: 6,
      itemPrice: 70,
      itemUnit: 'lt',
      itemQuantity: 0,
      itemAmount: 0
    }]
  },
];