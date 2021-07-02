import { TestBed } from '@angular/core/testing';

import { AmbientService } from './ambient.service';

describe('AmbientService', () => {
  let service: AmbientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
