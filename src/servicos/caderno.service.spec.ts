import { TestBed } from '@angular/core/testing';

import { CadernoService } from './caderno.service';

describe('CadernoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadernoService = TestBed.get(CadernoService);
    expect(service).toBeTruthy();
  });
});
