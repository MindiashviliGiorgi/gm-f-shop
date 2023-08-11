import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBaseLayersPageComponent } from './page-base-layers-page.component';

describe('PageBaseLayersPageComponent', () => {
  let component: PageBaseLayersPageComponent;
  let fixture: ComponentFixture<PageBaseLayersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBaseLayersPageComponent]
    });
    fixture = TestBed.createComponent(PageBaseLayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
