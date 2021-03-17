import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.inject(TaskService);
  });
});
