import { TestBed } from '@angular/core/testing';

import { UsersArrayService } from './users-array.service';

describe('UsersArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersArrayService = TestBed.get(UsersArrayService);
    expect(service).toBeTruthy();
  });
});
