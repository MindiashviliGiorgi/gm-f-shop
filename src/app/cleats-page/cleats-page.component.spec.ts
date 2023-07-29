import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleatsPageComponent } from './cleats-page.component';

describe('CleatsPageComponent', () => {
  let component: CleatsPageComponent;
  let fixture: ComponentFixture<CleatsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CleatsPageComponent]
    });
    fixture = TestBed.createComponent(CleatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
