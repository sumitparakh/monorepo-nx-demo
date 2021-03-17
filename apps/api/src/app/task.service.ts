import { Injectable } from '@angular/core';
import { DbService } from './core/db.service';

@Injectable()
export class TaskService {

  constructor(private readonly dbService: DbService) { }

  getTasks() {
    const tasks = this.dbService.db.get('tasks');
    return tasks;
  }
}
