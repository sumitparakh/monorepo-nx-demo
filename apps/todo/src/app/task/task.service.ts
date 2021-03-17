import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Optional, Task } from '@monorepo-nx-demo/api-interfaces';
import { tap } from 'rxjs/operators';

export type TaskOptional = Optional<Task, 'id'>;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskAdded: EventEmitter<any> = new EventEmitter();
  taskDeleted: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>('/api/tasks');
  }

  delete(id: number) {
    return this.http.delete(`/api/task/${id}`).pipe(
      tap((res) => {
        this.taskDeleted.next(res);
      })
    );
  }

  saveTask(task: TaskOptional) {
    return this.http.post('/api/task', task).pipe(
      tap((res) => {
        this.taskAdded.next(res);
      })
    );
  }
}
