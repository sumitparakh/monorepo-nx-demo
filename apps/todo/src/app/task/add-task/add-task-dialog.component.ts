import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddTaskDialogTemplateComponent } from './add-task-dialog-template.component';

@Component({
  selector: 'monorepo-nx-demo-add-task-dialog',
  template: ``,
  styles: [],
})
export class AddTaskDialogComponent implements OnInit, OnDestroy {
  $destroy: Subscription;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.$destroy = this.dialog
      .open(AddTaskDialogTemplateComponent, {
        minWidth: '400px'
      })
      .afterClosed()
      .subscribe(() => {
        this.router.navigateByUrl('/tasks');
      });
  }

  ngOnDestroy() {
    this.$destroy?.unsubscribe();
  }
}
