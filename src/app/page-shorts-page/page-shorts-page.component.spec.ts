import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShortsPageComponent } from './page-shorts-page.component';

describe('PageShortsPageComponent', () => {
  let component: PageShortsPageComponent;
  let fixture: ComponentFixture<PageShortsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageShortsPageComponent]
    });
    fixture = TestBed.createComponent(PageShortsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
