import { TestBed } from '@angular/core/testing';

import { DevelopperService } from './developper.service';

describe('DevelopperService', () => {
  let service: DevelopperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
