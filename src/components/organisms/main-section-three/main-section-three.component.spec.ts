import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionThreeComponent } from './main-section-three.component';

describe('MainSectionThreeComponent', () => {
  let component: MainSectionThreeComponent;
  let fixture: ComponentFixture<MainSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
