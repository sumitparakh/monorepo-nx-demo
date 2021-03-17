import { Injectable } from '@angular/core';
import { Task } from '@monorepo-nx-demo/api-interfaces';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as path from 'path';

@Injectable()
export class DbService {
  adapter;
  db;
  constructor() {
    this.adapter = new FileSync(path.join(__dirname, '/assets/db/todo.json'));
    this.db = low(this.adapter);
    this.db._.mixin({
      id: (array: Task[]) => array.length + 1,
    });

    console.log('CONSTRUCTOR');
  }
}
