import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  result: any;
  constructor(private http: HttpClient) {}

  addTask(name, description) {
    const uri = 'http://localhost:4000/tasks/add';
    const obj = {
      name: name,
      description: description
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getTasks() {
    const uri = 'http://localhost:4000/tasks';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editTask(id) {
    const uri = 'http://localhost:4000/tasks/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateTask(name, description, id) {
    const uri = 'http://localhost:4000/tasks/update/' + id;

    const obj = {
      name: name,
      description: description
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteTask(id) {
    const uri = 'http://localhost:4000/tasks/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
