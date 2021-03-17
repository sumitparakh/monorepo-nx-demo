import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AddTaskDialogComponent } from './add-task-dialog.component';
import { AddTaskDialogTemplateComponent } from './add-task-dialog-template.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    AddTaskComponent,
    AddTaskDialogComponent,
    AddTaskDialogTemplateComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CoreModule,
  ],
  exports: [AddTaskComponent, AddTaskDialogComponent],
})
export class AddTaskModule {}
