import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Task';
  angForm: FormGroup;
  constructor(private taskservice: TaskService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
   });
  }
  addTask(name, description) {
      this.taskservice.addTask(name, description);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
