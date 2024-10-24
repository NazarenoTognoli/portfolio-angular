import { TestBed } from '@angular/core/testing';

import { SliderBehaviorService } from './slider-behavior.service';

describe('SliderBehaviorService', () => {
  let service: SliderBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
