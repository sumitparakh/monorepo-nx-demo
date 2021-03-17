import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeAll(async () => {
    await Test.createTestingModule({
      providers: [AppService],
    }).compile();
  });
});
