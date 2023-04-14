import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../models/customer';
import { addCustomer, editCustomer } from '../store/action/customer.actions';
import { CustomerState } from '../store/reducer/customer.reducer';
import { SharedService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  @ViewChild('box')
  private box!: ElementRef;
  isEdit = false;
  cust: any;

  constructor(
    private store: Store<CustomerState>,
    private service: SharedService
  ) {}

  ngOnInit(): void {
    this.service.editCustName.subscribe({
      next: (res: any) => {
        if (res !== null) {
          this.isEdit = true;
          this.cust = res;
          this.box.nativeElement.value = res.name;
        }
      },
      error: (err: any) => {
        console.log('err >>> ', err);
      },
    });
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
    this.box.nativeElement.value = '';
  }

  editCustomer(customerName: string) {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(editCustomer(this.cust, customer));
    this.box.nativeElement.value = '';
    this.isEdit = false;
  }
}
