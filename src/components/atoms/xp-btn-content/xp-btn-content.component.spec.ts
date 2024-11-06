import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpBtnContentComponent } from './xp-btn-content.component';

describe('XpBtnContentComponent', () => {
  let component: XpBtnContentComponent;
  let fixture: ComponentFixture<XpBtnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XpBtnContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpBtnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
