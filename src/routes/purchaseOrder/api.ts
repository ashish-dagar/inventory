import { orderItem, poDataNew } from "../../mockData";

export const getCreatePOList = () => {
    console.log('cxvxcvxcvxvxc')
    return Promise.resolve(orderItem);
}

export const newCall = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
}

export const createNewPO = (param: any) => {
    poDataNew.push(param);
}