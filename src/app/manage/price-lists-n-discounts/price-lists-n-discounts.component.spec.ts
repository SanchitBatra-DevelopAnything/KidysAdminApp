import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListsNDiscountsComponent } from './price-lists-n-discounts.component';

describe('PriceListsNDiscountsComponent', () => {
  let component: PriceListsNDiscountsComponent;
  let fixture: ComponentFixture<PriceListsNDiscountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceListsNDiscountsComponent]
    });
    fixture = TestBed.createComponent(PriceListsNDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
