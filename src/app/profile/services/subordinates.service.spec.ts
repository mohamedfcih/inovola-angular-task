import { TestBed } from '@angular/core/testing';

import { SubordinatesService } from './subordinates.service';

describe('SubordinatesService', () => {
  let service: SubordinatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubordinatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
