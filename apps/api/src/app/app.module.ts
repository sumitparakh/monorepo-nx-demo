import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DbService } from './core/db.service';

import { TaskService } from './task.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TaskService, DbService],
})
export class AppModule {}
