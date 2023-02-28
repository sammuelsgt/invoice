import { Component } from '@angular/core';
import { Items } from 'src/app/interfaces/invoice';
import { InvoiceServiceService } from 'src/app/services/invoice-service.service';

@Component({
  selector: 'app-add-item-invoice',
  templateUrl: './add-item-invoice.component.html',
  styleUrls: ['./add-item-invoice.component.css']
})
export class AddItemInvoiceComponent {
  constructor(private invoiceService:InvoiceServiceService){}
  addItem(name: string,quantity: any,unitPrice: any) {
    let totalPrice = quantity * unitPrice;
    this.invoiceService.addItems({name,quantity,unitPrice,totalPrice} as Items)
  }
}
