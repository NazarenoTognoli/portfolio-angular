import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionOneDesktopComponent } from './main-section-one-desktop.component';

describe('MainSectionOneDesktopComponent', () => {
  let component: MainSectionOneDesktopComponent;
  let fixture: ComponentFixture<MainSectionOneDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionOneDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionOneDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
