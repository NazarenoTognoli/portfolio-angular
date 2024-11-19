import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageSevenComponent } from './slider-image-seven.component';

describe('SliderImageSevenComponent', () => {
  let component: SliderImageSevenComponent;
  let fixture: ComponentFixture<SliderImageSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageSevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
