import { Component } from '@angular/core';
import { Optional, Task } from '@monorepo-nx-demo/api-interfaces';
import { TaskOptional, TaskService } from '../task.service';

@Component({
  selector: 'monorepo-nx-demo-add-task-dialog-template',
  template: `
    <div class="dialog-content">
      <h1 mat-dialog-title>New Task</h1>
      <div mat-dialog-content>
        <mat-form-field>
          <mat-label>Enter task</mat-label>
          <input matInput [(ngModel)]="task.task" cdkFocusInitial />
        </mat-form-field>
      </div>
      <div mat-dialog-actions>
        <button
          mat-button
          [disabled]="!task.task"
          [mat-dialog-close]="task.task"
          (click)="saveTask()"
        >
          Save
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .mat-dialog-actions {
        float: right;
      }

      .dialog-content .mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class AddTaskDialogTemplateComponent {
  task: TaskOptional = { task: '' };

  constructor(private taskService: TaskService) {}
  saveTask() {
    if (this.task.task) {
      this.taskService.saveTask(this.task).subscribe();
    }
  }
}
