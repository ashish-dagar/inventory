/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import CreatePO from '../create/CreatePO';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import * as api from '../api';
import { getCreatePOList } from '../api';
import { orderItem } from '../../../mockData';

jest.mock('../api', () => ({
  getCreatePOList: jest.fn(() => Promise.resolve({totalAmount: 100,status: 200,
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
    }]})),
  newCall: jest.fn()
}));



describe("API data", () => {
  it("API re4nder", async () => {
   render(<CreatePO />);
   expect(getCreatePOList).toHaveBeenCalledTimes(1);
   const am = screen.getByTestId('amount');
   console.log("am==============", am.textContent)
//   expect(am.textContent).toEqual(orderItem.totalAmount)
   
  });
});
