import { TestBed } from '@angular/core/testing';

import { TestNavigatorService } from './test-navigator.service';

describe('TestNavigatorService', () => {
  let service: TestNavigatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
