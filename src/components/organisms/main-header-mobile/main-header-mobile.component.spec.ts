import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderMobileComponent } from './main-header-mobile.component';

describe('MainHeaderMobileComponent', () => {
  let component: MainHeaderMobileComponent;
  let fixture: ComponentFixture<MainHeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeaderMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
