import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageSixComponent } from './slider-image-six.component';

describe('SliderImageSixComponent', () => {
  let component: SliderImageSixComponent;
  let fixture: ComponentFixture<SliderImageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
