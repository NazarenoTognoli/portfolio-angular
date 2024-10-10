import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameMobileComponent } from './my-name-mobile.component';

describe('MyNameMobileComponent', () => {
  let component: MyNameMobileComponent;
  let fixture: ComponentFixture<MyNameMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNameMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNameMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
