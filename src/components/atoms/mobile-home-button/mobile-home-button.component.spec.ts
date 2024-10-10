import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeButtonComponent } from './mobile-home-button.component';

describe('MobileHomeButtonComponent', () => {
  let component: MobileHomeButtonComponent;
  let fixture: ComponentFixture<MobileHomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHomeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
