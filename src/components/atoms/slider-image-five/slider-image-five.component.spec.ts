import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageFiveComponent } from './slider-image-five.component';

describe('SliderImageFiveComponent', () => {
  let component: SliderImageFiveComponent;
  let fixture: ComponentFixture<SliderImageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
