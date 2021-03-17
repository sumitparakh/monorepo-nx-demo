import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'monorepo-nx-demo-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  constructor(public router: Router, private activatedRoute: ActivatedRoute) {}

  addTask() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });
    // this.dialog.open(AddTaskDialogComponent, {});
  }
}
