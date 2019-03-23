import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  form_group: FormGroup;
  validationErrorMessages = {
    name : {
      required : 'Name field is required',
      minlength : 'Name min length is 2',
      maxlength : 'Name max length is 10'
    },
    number : {
      required : 'Number is mandatory'
    },
    skill_name : {
      required : 'Skill required'
    },
    exp_years : {
      required : 'Experience required'
    },
    level : {
      required : 'Level is mandatory to be low/high'
    }
  }

  messagesOnView = {
    name : ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
/*
	this.form_group = new FormGroup( {
		name : new FormControl(),
		number : new FormControl(),
		skills : new FormGroup( {
			skill_name : new FormControl(),
			exp_years : new FormControl(),
			level : new FormControl()
		})
	});
*/

	// using FormBuilder
	this.form_group = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)] ],
		number : ['', Validators.required],
		skills : this.fb.group({
			skill_name : ['', Validators.required],
			exp_years : ['', Validators.required],
			level : ['', Validators.required]
		})
	});

/*

	this.form_group.get('name').valueChanges
	.subscribe( (value) => {
		console.log('name : ', value);
	});

	this.form_group.valueChanges
	.subscribe( (full_form_value) => {
		console.log('full form value : ', full_form_value);
	});
*/
  }

/*
  check() : boolean {
    let displayMsg = false;

    let grp = this.form_group;
    console.log('touched : ', grp.get('name').touched);
    console.log('dirty : ', grp.get('name').dirty);
    console.log('name value : ', grp.get('name').value);
    //console.log('minLength : ', grp.get('name').errors.minlength);
    //console.log('maxLength : ', grp.get('name').errors.maxlength);
    console.log('errors : ', grp.get('name').errors);

    if((grp.get('name').touched || grp.get('name').dirty) && ( ! grp.get('name').value))
    {
      displayMsg = true;
    }
    else if((grp.get('name').errors != null ) && (grp.get('name').errors.minlength ||
            grp.get('name').errors.maxlength)) {
      displayMsg = true;
    }

    if(! displayMsg) {
      console.log('both conditions failed');
    }

    return displayMsg;
  }
*/

  displayFormKeysValues(group : FormGroup) : void {
  	let controls = group.controls;
  	//console.log('controls : ', controls);
  	Object.keys(controls).forEach( (key) => {
  		//console.log('key : ', key);
  		let control = group.get(key);
  		if(control instanceof FormGroup) {
  			this.displayFormKeysValues(control);
  			control.disable();
  		}
  		else {
  			console.log('key : ', key, ' value : ', control.value);
  		}
  	});
  }

  onLoadData() : void {
  	this.form_group.setValue({
  		name : 'kan',
  		number : '9986',
  		skills : {
  			skill_name : 'C++',
  			exp_years : 9,
  			level : 'high'
  		}
  	});

  	this.displayFormKeysValues(this.form_group);
  }

  onUpdateSkills() : void {
	this.form_group.patchValue({
		skills : {
			skill_name : 'C++, NodeJS',
			exp_years : 8,
			level : 'high'
		}
	});
  }

  displayValidationErrors(group : FormGroup) : void {
  	let controls = group.controls;
  	//console.log('controls : ', controls);
  	Object.keys(controls).forEach( (key) => {
  		//console.log('key : ', key);
      this.messagesOnView[key] = '';
  		let control = group.get(key);
  		if(control instanceof FormGroup) {
  			this.displayValidationErrors(control);
  			//control.disable();
  		}
  		else {
  			//console.log('key : ', key, ' value : ', control.value);
        // for this control, check if there are any errors
        if(! control.valid) {
          // check what all errors we have
          console.log('key : ', key)
          //let errors = this.form_group.get(key.errors;
          let errors = control.errors;
          for( const error in errors ) {
            console.log('error : ', error);
            if(error) {
              this.messagesOnView[key] += this.validationErrorMessages[key][error] + ' '
            }
          }
        }
  		}
  	});
  }

  onSubmit() : void {
    console.log(this.form_group.value);

	  console.log(this.form_group.get('skills').controls.skill_name.value);
    console.log(this.form_group.get('skills').controls);
    // loop through form elements and find validation errors
    this.displayValidationErrors(this.form_group)
  }
}
