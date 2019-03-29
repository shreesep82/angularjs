import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './custom_validator/custom_validator';
import { ActivatedRoute } from '@angular/router';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  employee : json = {};
  form_group: FormGroup;
  validationErrorMessages = {
    name : {
      required : 'Name field is required',
      minlength : 'Name min length is 2',
      maxlength : 'Name max length is 10'
    },
    email : {
      required : 'Email is mandatory',
      domain : 'Email should be like gmail.com'
    },
    confirm_email : {
      required : 'Confirm Email is mandatory',
      domain : 'Email should be like gmail.com'
      //email_mismatch : 'Confirm Email should be same as email'
    },
    email_group : {
      email_mismatch : 'Email and Confirm Email do not match'
      //email_mismatch : 'Confirm Email should be same as email'
    },
    number : {
      required : 'Phone number is mandatory',
      num_format : 'Number should be like +91-<num>'
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

  constructor(private fb: FormBuilder, private router : ActivatedRoute,
  private emp_srv : EmployeeService, private navigate_router : Router) { }

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
    contact : ['email'],
    //email : ['', [Validators.required, check_email]],
    //email : ['', [Validators.required, check_email('gmail.com')]],
    email_group : this.fb.group({
			email : ['', [Validators.required, check_email('gmail.com')]],
			confirm_email : ['', Validators.required]
		}, {validator : check_email_group}),
    number : ['', [Validators.required, CustomValidator.custom_check_number('+91-')]],
		skills : this.fb.array([
			this.addSkillsFormGroup()
		])
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

  this.form_group.valueChanges.subscribe( (data) => {
    //console.log('Form changes : ', data);
    this.displayValidationErrors();
  })

  this.form_group.get('contact').valueChanges.subscribe( (contact) => {
    this.onContactChange(contact);
  })

  this.form_group.get('email_group').valueChanges.subscribe( (data) => {
    this.displayValidationErrors_email_group();
  })

  this.router.paramMap.subscribe( (params) => {
    let emp_id = params.get('num');
    /*
    let emp_details = this.emp_srv.getEmployeeDetails();
    for(const emp of emp_details) {
      //console.log('emp : ', emp);
      if(emp_id == emp.id) {
        this.form_group.patchValue({
      		  name : emp.name
      	})
      }

    }
    */
    /*
    let promise = this.emp_srv.getEmployeeDetailsById(emp_id);
    let emp_details;
    promise.then( (data) => {
      console.log('data : ', data);
      emp_details = data;
    })
    console.log('emp_details : ', emp_details);
    */
    if(emp_id) {
      this.getEmpDetailsById(emp_id);
    }
    else {
      //this.getEmployeeDetailsJson();
      // this is create employee case
      this.employee.id = null;
    }
  })
}

async getEmployeeDetailsJson() : any {
  let employees = await this.emp_srv.getEmployeeDetailsJson();
  console.log('employees : ', employees);
}

async getEmpDetailsById(emp_id : number) : any {
  let emp = await this.emp_srv.getEmployeeDetailsById(emp_id);
  //console.log('form_group : ', this.form_group);

  this.form_group.patchValue({
      name : emp.name,
      contact : emp.contact,
      email_group : {
        email : emp.email,
        confirm_email : emp.email
      },
      number : emp.phone
    })



    let form_array = this.form_group.get('skills');
    while (form_array.length !== 0) {
        form_array.removeAt(0)
    }
    // populate this.form_group.skills array first
    for(const skill of emp.skills) {
      (<FormArray>form_array).push(this.fb.group({
        skill_name : [skill.skill_name, Validators.required],
        exp_years : [skill.exp_years, Validators.required],
        level : [skill.level, Validators.required]
      }));
    }

    this.form_group.setControl('skills', form_array);


/*
  this.form_group.patchValue({
      skills : [
        {
          skill_name : emp.skills[0].skill_name,
          exp_years : emp.skills[0].exp_years,
          level : emp.skills[0].level
        }
      ]
  })
  */

  /*
  let emp_details;
  promise.then( (data) => {
    console.log('data : ', data);
    emp_details = data;
  })
  console.log('emp_details : ', emp_details);

})
*/
}

addSkillsFormGroup() : FormGroup {
  return this.fb.group({
    skill_name : ['', Validators.required],
    exp_years : ['', Validators.required],
    level : ['', Validators.required]
  })
}

addSkills() : void {
    let form_array = this.form_group.get('skills');
    (<FormArray>form_array).push(this.addSkillsFormGroup());
    console.log('form_array length : ', form_array.length);
}

removeSkill(index: number) : void {
  let form_array = <FormArray>this.form_group.get('skills');
  form_array.removeAt(index);
  form_array.markAsDirty();
  form_array.markAsTouched();
}

onContactChange(contact: string) : void {
  if(contact === 'phone') {
    this.form_group.get('number').setValidators([Validators.required, CustomValidator.custom_check_number('+91-')])
  }
  else {
    this.form_group.get('number').clearValidators();
  }

  // immediately trigger the validation on form control
  this.form_group.get('number').updateValueAndValidity();
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
    /*
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
    */
/*
    const form_array = new FormArray([
      new FormControl('', Validators.required),
      new FormGroup({
        name : new FormControl('', Validators.required),
        age : new FormControl('', Validators.required)
      }),
      new FormArray([
        new FormControl('', Validators.required)
      ])
    ])

    console.log('form array size : ', form_array.length);
*/
    for (const control of form_array.controls) {
      if(control instanceof FormControl)
        console.log('FormControl');
    }

    console.log(form_array.value);
    const form_array2 = this.fb.array([
      new FormControl('val1', Validators.required),
      new FormControl('val2', Validators.required),
      new FormControl('val3', Validators.required),
    ])

    console.log(form_array2.value);
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


  displayValidationErrors(group : FormGroup = this.form_group) : void {
  	let controls = group.controls;
  	//console.log('controls : ', controls);
  	Object.keys(controls).forEach( (key) => {
  		//console.log('key : ', key);
      this.messagesOnView[key] = '';
  		let control = group.get(key);
      /*
      if(control instanceof FormArray){
        // loop over elements
        for(const array_control of control.controls) {
          if(array_control instanceof FormGroup) {
            this.displayValidationErrors(array_control);
          }
        }
      }
      */
  		if(control instanceof FormGroup) {
  			this.displayValidationErrors(control);
  			//control.disable();
  		}
  		else {
  			//console.log('key : ', key, ' value : ', control.value);
        // for this control, check if there are any errors
        if(! control.valid && (control.touched || control.dirty || control.value != '') ) {
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

  displayValidationErrors_email_group(group : FormGroup = this.form_group) : void {
    //let controls = group.controls;
    let controls = group.get('email_group').controls
    console.log('controls.errors : ', group.get('email_group').errors);




    Object.keys(controls).forEach( (key) => {
      console.log('key : ', key);
      this.messagesOnView[key] = '';
      let control = controls[key];
      console.log('control : ', control);

        //console.log('key : ', key, ' value : ', control.value);
        // for this control, check if there are any errors
        if(key === 'email' || key === 'confirm_email') {
          if(! control.valid && (control.touched || control.dirty) ) {
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

        /*else {

          if(! control.valid && (control.touched || control.dirty) ) {

          this.messagesOnView['email_group'] = '';
          let errors = group.get('email_group').errors;
          console.log('errors : ', errors);
          for( const error in errors ) {
            console.log('error : ', error);
            if(error) {
              if(error === 'required') {
                this.messagesOnView['confirm_email'] += this.validationErrorMessages['confirm_email'][error] + ' ';
              }
              else {
                this.messagesOnView['email_group'] += this.validationErrorMessages['email_group'][error] + ' '
              }
            }
          }
        }
      }*/

    });


    if(this.messagesOnView['confirm_email'] == '') {

          this.messagesOnView['email_group'] = '';
          let errors = group.get('email_group').errors;
          console.log('errors : ', errors);
          for( const error in errors ) {
            console.log('error : ', error);
            if(error) {
                console.log('validation message : ', this.validationErrorMessages['email_group'][error]);

                this.messagesOnView['email_group'] += this.validationErrorMessages['email_group'][error] + ' '
console.log('messagesOnView : ', this.messagesOnView['email_group']);
            }
          }
    }



  }


  populate_employee_details() : void {
    let form_group = this.form_group;

    this.employee['name'] = form_group.get('name').value;
    this.employee['contact'] = form_group.get('contact').value;
    this.employee['phone'] = form_group.get('number').value;
    this.employee['email'] = form_group.get('email_group').value.email;
    this.employee['skills'] = form_group.get('skills').value;

    console.log('employee : ', this.employee);
  }

  // this data is obtained after we 'put' employee data onto json-server
  async getPutDataFromJsonServer() : any {
    let data = await this.emp_srv.updateEmployeeDetails(this.employee);
    console.log('data : ', data);
  }

  // this data is obtained after we 'post' employee data onto json-server
  async getPostDataFromJsonServer() : any {
    let data = await this.emp_srv.CreateEmployeeDetails(this.employee);
    console.log('data : ', data);
  }


  navigate_to_list() : void {
    console.log('before navigating to /list');
    this.navigate_router.navigate(['/employee']);
  }

  onSubmit() : void {
    this.employee = {};
    this.router.paramMap.subscribe( (params) => {
      let emp_id = params.get('num');
      if(emp_id) {
        this.employee['id'] = emp_id;
        this.populate_employee_details();
        //let data = this.emp_srv.updateEmployeeDetails(this.employee);
        //console.log('data : ', data);
        this.getPutDataFromJsonServer();
        this.navigate_to_list();
      }
      else {
        this.employee.id = null;
        this.populate_employee_details();
        this.getPostDataFromJsonServer();
        this.navigate_to_list();
      }
    }
    //console.log('form_group : ', this.form_group.controls)
  }
}

/*
function check_email(control : AbstractControl) : { [key : string] : any} | null {
  // check if email field has email of the form something@gmail.com
  // get domain
  const email_value : string = control.value;
  const domain = email_value.substring(email_value.lastIndexOf('@') + 1);
  //console.log('domain : ', domain);
  if(domain === '' || domain.toLowerCase() === 'gmail.com') {
    //console.log('domain is gmail.com');
    return null;
  }

  console.log('email errors : ', control.errors)
  return {'domain' : true};
}
*/

function check_email_group(control : AbstractControl) : { [key : string] : any} | null {
  const email = control.get('email').value;
  const confirm_email = control.get('confirm_email').value;

  console.log('email : ', email, ' confirm email : ', confirm_email);

  if(email === confirm_email || (control.get('confirm_email').pristine && control.get('confirm_email').value === '')) {
    return null;
  }
  else {
    return { 'email_mismatch' : true };
  }
}

function check_email(in_domain : string) {
  return (control : AbstractControl) : { [key : string] : any} | null => {
    // check if email field has email of the form something@gmail.com
    // get domain
    const email_value : string = control.value;
    const domain = email_value.substring(email_value.lastIndexOf('@') + 1);
    //console.log('domain : ', domain);
    if(domain === '' || domain.toLowerCase() === in_domain.toLowerCase()) {
      //console.log('domain is gmail.com');
      return null;
    }

    console.log('email errors : ', control.errors)
    return {'domain' : true};
  }
}

/*
Add confirm email field. Add both email, confirm email in new div with formGroup
Add validators in ngOnInit
Add confirm email in validationErrorMessages
Add custom validator function (with form group as argument) to validate email, confirm email matching. Return {'emailMismatch' : 'true/false' } as json
Since we are passing group as arg for custom validator, we need to bind group with validator with a new syntax
Add email group as a new entry to validationErrorMessages with emailMismatch as key (see custom validator point above)
*/
