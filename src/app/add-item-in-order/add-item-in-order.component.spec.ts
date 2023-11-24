import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemInOrderComponent } from './add-item-in-order.component';

describe('AddItemInOrderComponent', () => {
  let component: AddItemInOrderComponent;
  let fixture: ComponentFixture<AddItemInOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemInOrderComponent]
    });
    fixture = TestBed.createComponent(AddItemInOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
