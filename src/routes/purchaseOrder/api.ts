import { orderItem } from "../../mockData";

export const getCreatePOList = () => {
    console.log('cxvxcvxcvxvxc')
    return Promise.resolve(orderItem);
}

export const newCall = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
}