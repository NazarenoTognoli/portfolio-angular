import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageThreeComponent } from './slider-image-three.component';

describe('SliderImageThreeComponent', () => {
  let component: SliderImageThreeComponent;
  let fixture: ComponentFixture<SliderImageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
