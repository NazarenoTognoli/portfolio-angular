import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionTwoMobileComponent } from './main-section-two-mobile.component';

describe('MainSectionTwoMobileComponent', () => {
  let component: MainSectionTwoMobileComponent;
  let fixture: ComponentFixture<MainSectionTwoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionTwoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionTwoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
