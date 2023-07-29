import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyPageComponent } from './jersey-page.component';

describe('JerseyPageComponent', () => {
  let component: JerseyPageComponent;
  let fixture: ComponentFixture<JerseyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JerseyPageComponent]
    });
    fixture = TestBed.createComponent(JerseyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
