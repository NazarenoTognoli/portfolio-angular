import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNameDesktopComponent } from './my-name-desktop.component';

describe('MyNameDesktopComponent', () => {
  let component: MyNameDesktopComponent;
  let fixture: ComponentFixture<MyNameDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNameDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNameDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
