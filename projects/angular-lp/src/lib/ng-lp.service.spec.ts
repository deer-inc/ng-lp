import { TestBed } from '@angular/core/testing';

import { AngularLpService } from './ng-lp.service';

describe('AngularLpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLpService = TestBed.get(AngularLpService);
    expect(service).toBeTruthy();
  });
});
