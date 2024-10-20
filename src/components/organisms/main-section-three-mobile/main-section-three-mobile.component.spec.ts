import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionThreeMobileComponent } from './main-section-three-mobile.component';

describe('MainSectionThreeMobileComponent', () => {
  let component: MainSectionThreeMobileComponent;
  let fixture: ComponentFixture<MainSectionThreeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionThreeMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionThreeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
