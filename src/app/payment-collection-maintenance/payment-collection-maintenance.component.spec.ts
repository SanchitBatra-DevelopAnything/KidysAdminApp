import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCollectionMaintenanceComponent } from './payment-collection-maintenance.component';

describe('PaymentCollectionMaintenanceComponent', () => {
  let component: PaymentCollectionMaintenanceComponent;
  let fixture: ComponentFixture<PaymentCollectionMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCollectionMaintenanceComponent]
    });
    fixture = TestBed.createComponent(PaymentCollectionMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
