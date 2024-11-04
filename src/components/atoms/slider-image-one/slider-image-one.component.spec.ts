import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageOneComponent } from './slider-image-one.component';

describe('SliderImageOneComponent', () => {
  let component: SliderImageOneComponent;
  let fixture: ComponentFixture<SliderImageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderImageOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderImageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
