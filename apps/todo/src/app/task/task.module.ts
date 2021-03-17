import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { AddTaskModule } from './add-task/add-task.module';
import { TaskListModule } from './task-list/task-list.module';
import { RouterModule } from '@angular/router';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    AddTaskModule,
    TaskListModule,
    TaskRoutingModule,
    RouterModule,
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
