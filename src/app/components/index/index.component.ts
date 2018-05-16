import { TaskService } from './../../task.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../Task';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tasks: any;

  constructor(private http: HttpClient, private service: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }

  deleteTask(id) {
    this.service.deleteTask(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
