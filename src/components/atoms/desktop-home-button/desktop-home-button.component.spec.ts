import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopHomeButtonComponent } from './desktop-home-button.component';

describe('DesktopHomeButtonComponent', () => {
  let component: DesktopHomeButtonComponent;
  let fixture: ComponentFixture<DesktopHomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopHomeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
