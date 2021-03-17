import { Test } from '@nestjs/testing';

import { AppController } from './app.controller';

import { DbService } from './core/db.service';
import { TaskService } from './task.service';

describe('AppController', () => {
  beforeAll(async () => {
    await Test.createTestingModule({
      controllers: [AppController],
      providers: [TaskService, DbService],
    }).compile();
  });
});
