import { Component } from '@angular/core';
import { Items } from 'src/app/interfaces/invoice';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  
  submitDate: string = new Date().toLocaleDateString();
  invoiceName: string = 'Sammuel Tuliao';
  companyName: string = 'Sm Cubao';
  streetAddress: string = '#123 10th Street';
  city: string = 'Quezon City';
  state: string = 'NCR';
  zip: string = '1109';
  payName ='Sm Cubao tech Department';
  projectName: string = 'Warehouse Expansion';
  invoiceNumber: number = Math.floor(Math.random() * 899999 + 100000);
  dueDate: string = '4/25/2023'
  items: any[] = [];
  constructor(private invoiceService:InvoiceServiceService){}
  ngOnInit(): void {
    this.items = this.invoiceService.getItems();
  }
  
  removeItem(id: number) {
    this.invoiceService.removeItem(id);
    this.items = this.invoiceService.getItems();
  }

  getSubtotal() {
   return this.invoiceService.getSubtotal();
  }
}
