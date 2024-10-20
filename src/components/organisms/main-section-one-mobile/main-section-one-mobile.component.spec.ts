import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionOneMobileComponent } from './main-section-one-mobile.component';

describe('MainSectionOneMobileComponent', () => {
  let component: MainSectionOneMobileComponent;
  let fixture: ComponentFixture<MainSectionOneMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionOneMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionOneMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
