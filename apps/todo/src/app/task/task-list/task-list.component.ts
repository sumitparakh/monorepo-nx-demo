import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from '@monorepo-nx-demo/api-interfaces';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'monorepo-nx-demo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    this.getTasks();
    this.taskService.taskAdded.subscribe(() => {
      this.getTasks();
    });

    this.taskService.taskDeleted.subscribe(() => {
      this.getTasks();
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
  }

  deleteTask(id: number) {
    this.taskService.delete(id).subscribe();
  }

  ngOnInit() {
    console.log('On Init Task List');
  }

  taskTrackBy(index, item: Task) {
    return item.id;
  }
}
