import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionThreeDesktopComponent } from './main-section-three-desktop.component';

describe('MainSectionThreeDesktopComponent', () => {
  let component: MainSectionThreeDesktopComponent;
  let fixture: ComponentFixture<MainSectionThreeDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionThreeDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionThreeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
