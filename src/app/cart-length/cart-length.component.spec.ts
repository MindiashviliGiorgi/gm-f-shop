import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLengthComponent } from './cart-length.component';

describe('CartLengthComponent', () => {
  let component: CartLengthComponent;
  let fixture: ComponentFixture<CartLengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartLengthComponent]
    });
    fixture = TestBed.createComponent(CartLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
