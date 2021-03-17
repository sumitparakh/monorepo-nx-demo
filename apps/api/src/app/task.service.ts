import { Injectable } from '@angular/core';
import { Task } from '@monorepo-nx-demo/api-interfaces';
import { DbService } from './core/db.service';

@Injectable()
export class TaskService {
  constructor(private readonly dbService: DbService) {}

  getTasks() {
    const tasks = this.dbService.db.get('tasks');
    return tasks;
  }

  saveTask(task: Task) {
    try {
      const tasks = this.dbService.db.get('tasks');
      const id = tasks.id().value();
      task.id = id;
      tasks.push(task).write();
      return { success_message: 'New task created successfully' };
    } catch (error) {
      return { error_message: error };
    }
  }

  deleteTask(id: number) {
    try {
      this.dbService.db.get('tasks').remove({ id: +id }).write();
      return { success_message: 'Task deleted successfully' }; 
    } catch (error) {
      return { error_message: error };
    }
  }
}
