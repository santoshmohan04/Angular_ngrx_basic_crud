import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { select, Store } from '@ngrx/store';
import { selectCustomers } from '../store/selector/customer.selectors';
import { CustomerState } from '../store/reducer/customer.reducer';
import { deleteCustomer } from '../store/action/customer.actions';
import { SharedService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss'],
})
export class CustomerViewComponent {
  customers$: Observable<Customer[]>;

  constructor(
    private store: Store<CustomerState>,
    private service: SharedService
  ) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  editCust(customer: Customer) {
    this.service.Customeredit(customer);
  }

  removeCust(customer: Customer) {
    this.store.dispatch(deleteCustomer(customer));
  }
}
