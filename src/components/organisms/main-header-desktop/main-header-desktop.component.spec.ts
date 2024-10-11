import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderDesktopComponent } from './main-header-desktop.component';

describe('MainHeaderDesktopComponent', () => {
  let component: MainHeaderDesktopComponent;
  let fixture: ComponentFixture<MainHeaderDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeaderDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeaderDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
