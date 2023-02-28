import { Injectable } from '@angular/core';
import { Items } from '../interfaces/invoice';
import { ITEMS } from '../mock-data/mock-items';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  private items = ITEMS
  constructor() { }

  getItems(){
    return  this.items;
  }

  addItems(newItems: Items){
    const newId = this.items.length > 0 ? Math.max(...this.items.map(i => i.id)) + 1 : 1;
    this.items.push({...newItems, id: newId});
  }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  getSubtotal() {
    let subtotal = 0;
    this.items.forEach(item => {
      subtotal += item.totalPrice;
    });
    return subtotal;
  }


}
