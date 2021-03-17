import { Injectable } from '@angular/core';
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
  }
}
