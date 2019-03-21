import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  form_group: FormGroup;

  constructor() { }

  ngOnInit() {
	this.form_group = new FormGroup( {
		name : new FormControl(),
		number : new FormControl(),
		skills : new FormGroup( {
			skill_name : new FormControl(),
			exp_years : new FormControl(),
			level : new FormControl()
		})
	});
  }

  onSubmit() : void {
	console.log(this.form_group.value);

	console.log(this.form_group.get('skills').controls.skill_name.value);
  }
}
