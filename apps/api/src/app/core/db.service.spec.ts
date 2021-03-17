import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';

describe('DbService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.inject(DbService);
  });
});
