import { TestBed } from '@angular/core/testing';

import { MobileNavDisplayService } from './mobile-nav-display.service';

describe('MobileNavDisplayService', () => {
  let service: MobileNavDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileNavDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
