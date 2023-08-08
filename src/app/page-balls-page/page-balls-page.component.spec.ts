import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBallsPageComponent } from './page-balls-page.component';

describe('PageBallsPageComponent', () => {
  let component: PageBallsPageComponent;
  let fixture: ComponentFixture<PageBallsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBallsPageComponent]
    });
    fixture = TestBed.createComponent(PageBallsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
