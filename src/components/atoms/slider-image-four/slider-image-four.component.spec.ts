import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageFourComponent } from './slider-image-four.component';

describe('SliderImageFourComponent', () => {
  let component: SliderImageFourComponent;
  let fixture: ComponentFixture<SliderImageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
