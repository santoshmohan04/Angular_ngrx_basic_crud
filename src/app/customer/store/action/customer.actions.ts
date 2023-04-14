import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
  '[Customer] Add Customer',
  (customer: Customer) => ({ customer })
);

export const editCustomer = createAction(
  '[Customer] Edit Customer',
  (customer: Customer, newcustomer: Customer) => ({ customer, newcustomer })
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  (customer: Customer) => ({ customer })
);
