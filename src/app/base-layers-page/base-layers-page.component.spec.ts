import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayersPageComponent } from './base-layers-page.component';

describe('BaseLayersPageComponent', () => {
  let component: BaseLayersPageComponent;
  let fixture: ComponentFixture<BaseLayersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLayersPageComponent]
    });
    fixture = TestBed.createComponent(BaseLayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
