import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@monorepo-nx-demo/api-interfaces';

@Component({
  selector: 'monorepo-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks$ = this.http.get<Task>('/api/tasks');
  constructor(private http: HttpClient) {}
}
