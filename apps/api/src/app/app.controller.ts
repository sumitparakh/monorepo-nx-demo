import { Controller, Get } from '@nestjs/common';

import { Task } from '@monorepo-nx-demo/api-interfaces';

import { TaskService } from './task.service';

@Controller()
export class AppController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  getData(): Task[] {
    return this.taskService.getTasks();
  }
}
