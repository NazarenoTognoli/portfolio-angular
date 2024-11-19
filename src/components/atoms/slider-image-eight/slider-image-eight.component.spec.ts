import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageEightComponent } from './slider-image-eight.component';

describe('SliderImageEightComponent', () => {
  let component: SliderImageEightComponent;
  let fixture: ComponentFixture<SliderImageEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageEightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
