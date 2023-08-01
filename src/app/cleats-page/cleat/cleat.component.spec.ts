import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleatComponent } from './cleat.component';

describe('CleatComponent', () => {
  let component: CleatComponent;
  let fixture: ComponentFixture<CleatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleatComponent]
    });
    fixture = TestBed.createComponent(CleatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
