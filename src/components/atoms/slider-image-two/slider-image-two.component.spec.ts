import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageTwoComponent } from './slider-image-two.component';

describe('SliderImageTwoComponent', () => {
  let component: SliderImageTwoComponent;
  let fixture: ComponentFixture<SliderImageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
