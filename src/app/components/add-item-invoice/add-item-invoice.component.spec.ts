import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemInvoiceComponent } from './add-item-invoice.component';

describe('AddItemInvoiceComponent', () => {
  let component: AddItemInvoiceComponent;
  let fixture: ComponentFixture<AddItemInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
