import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskDialogComponent } from './add-task/add-task-dialog.component';
import { TaskComponent } from './task.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskComponent,
    children: [
      {
        path: 'add',
        component: AddTaskDialogComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TaskRoutingModule {}
