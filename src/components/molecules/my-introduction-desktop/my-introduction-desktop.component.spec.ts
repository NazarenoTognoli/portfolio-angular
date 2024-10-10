import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntroductionDesktopComponent } from './my-introduction-desktop.component';

describe('MyIntroductionDesktopComponent', () => {
  let component: MyIntroductionDesktopComponent;
  let fixture: ComponentFixture<MyIntroductionDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyIntroductionDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIntroductionDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
