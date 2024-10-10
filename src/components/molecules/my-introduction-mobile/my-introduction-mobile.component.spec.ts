import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntroductionMobileComponent } from './my-introduction-mobile.component';

describe('MyIntroductionMobileComponent', () => {
  let component: MyIntroductionMobileComponent;
  let fixture: ComponentFixture<MyIntroductionMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIntroductionMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIntroductionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
