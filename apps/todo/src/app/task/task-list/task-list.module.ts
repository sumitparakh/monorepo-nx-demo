import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TaskListComponent } from './task-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [TaskListComponent],
})
export class TaskListModule {}
