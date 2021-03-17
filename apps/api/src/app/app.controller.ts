import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Task } from '@monorepo-nx-demo/api-interfaces';

import { TaskService } from './task.service';

@Controller()
export class AppController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Post('task')
  saveTask(@Body() task: Task) {
    return this.taskService.saveTask(task);
  }

  @Delete('task/:id')
  deleteTask(@Param() { id }) {
    return this.taskService.deleteTask(id);
  }
}
