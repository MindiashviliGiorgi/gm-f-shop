import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCleatsPageComponent } from './page-cleats-page.component';

describe('PageCleatsPageComponent', () => {
  let component: PageCleatsPageComponent;
  let fixture: ComponentFixture<PageCleatsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCleatsPageComponent]
    });
    fixture = TestBed.createComponent(PageCleatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
