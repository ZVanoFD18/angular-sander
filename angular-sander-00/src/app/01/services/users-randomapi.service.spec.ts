import { TestBed } from '@angular/core/testing';

import { UsersRandomapiService } from './users-randomapi.service';

describe('UsersRandomapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersRandomapiService = TestBed.get(UsersRandomapiService);
    expect(service).toBeTruthy();
  });
});
