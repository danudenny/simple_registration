import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registered = false;
	submitted = false;
  userForm: FormGroup;
  gender = null;

  constructor(private formBuilder: FormBuilder){}

  invalidFirstName(){
  	return (this.submitted && this.userForm.controls.firstname.errors != null);
  }

  invalidLastName(){
  	return (this.submitted && this.userForm.controls.lastname.errors != null);
  }

  invalidEmail(){
  	return (this.submitted && this.userForm.controls.email.errors != null);
  }

  invalidPhone(){
  	return (this.submitted && this.userForm.controls.phone.errors != null);
  }

  // invalidDob(){
  // 	return (this.submitted && this.userForm.controls.dob.errors != null);
  // }

  // invalidGender(){
  // 	return (this.submitted && this.userForm.controls.gender.errors != null);
  // }

  ngOnInit(){
  	this.userForm = this.formBuilder.group({
      phone: ['', Validators.required, Validators.minLength(10), Validators.pattern('/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/g')],
  		firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // dob: ['', Validators.required],
      // gender: ['', Validators.required],
  		email: ['', [Validators.required, Validators.email]],
  	});
  }

  onSubmit(){
  	this.submitted = true;
  	if(this.userForm.invalid == true){
  		return;
  	}else{
  		this.registered = true;
  	}
  }
};