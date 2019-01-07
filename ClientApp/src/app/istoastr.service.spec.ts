import { TestBed } from '@angular/core/testing';

import { IstoastrService } from './istoastr.service';

describe('IstoastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IstoastrService = TestBed.get(IstoastrService);
    expect(service).toBeTruthy();
  });
});
