import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJerseysPageComponent } from './page-jerseys-page.component';

describe('PageJerseysPageComponent', () => {
  let component: PageJerseysPageComponent;
  let fixture: ComponentFixture<PageJerseysPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageJerseysPageComponent]
    });
    fixture = TestBed.createComponent(PageJerseysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
