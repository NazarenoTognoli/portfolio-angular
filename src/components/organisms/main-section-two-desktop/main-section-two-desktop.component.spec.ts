import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionTwoDesktopComponent } from './main-section-two-desktop.component';

describe('MainSectionTwoDesktopComponent', () => {
  let component: MainSectionTwoDesktopComponent;
  let fixture: ComponentFixture<MainSectionTwoDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionTwoDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionTwoDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
