import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss'],
})

// interface Form {
//   empName: FormControl,
//   empCode: FormControl
// }
export class MyAppComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  empForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    // this.createForm();
    this.empForm = this._fb.group({
      empName: new FormControl('Hello'),
    });
  }

  ngOnInit(): void {
    console.log('Hello Error');

    // throw new Error('THIS is custom error');
  }

  submit() {
    console.log('Name', this.firstName, 'last Name', this.lastName);
  }

  createForm() {
    const groups = {
      empName: ['Vivek'],
      empCode: ['SM001'],
    };

    this.empForm = this._fb.group(groups);
    console.log(this.empForm?.get('empName'), 'hello Log');
  }
}
