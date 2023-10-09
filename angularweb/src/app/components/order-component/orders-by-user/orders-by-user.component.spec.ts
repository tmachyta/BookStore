import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersByUserComponent } from './orders-by-user.component';

describe('OrdersByUserComponent', () => {
  let component: OrdersByUserComponent;
  let fixture: ComponentFixture<OrdersByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersByUserComponent]
    });
    fixture = TestBed.createComponent(OrdersByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
