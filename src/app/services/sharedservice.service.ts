import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  editCustName = new BehaviorSubject<Customer>(null);

  Customeredit(cust: Customer) {
    this.editCustName.next(cust);
  }
}
