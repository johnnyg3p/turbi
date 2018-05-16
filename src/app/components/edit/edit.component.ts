import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from './../../task.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  task: any;
  angForm: FormGroup;
  title = 'Edit Task';
  constructor(private route: ActivatedRoute, private router: Router, private service: TaskService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
   });
  }

  updateTask(name, description) {
    this.route.params.subscribe(params => {
    this.service.updateTask(name, description, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.task = this.service.editTask(params['id']).subscribe(res => {
        this.task = res;
      });
    });
  }
}
