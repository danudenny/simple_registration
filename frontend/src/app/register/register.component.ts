import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService, DatePipe ],
})
export class RegisterComponent implements OnInit {

	registered = false;
	submitted = false;
  userForm: FormGroup;
  gender = null;
  user_data: User[] = [];
  @Input() userData = { id: '', firstname: '', lastname: '', phone: '', gender: '', dob: '', email: '' }
  datePickerConfig: Partial<BsDatepickerConfig>;
  
  loginHidden: boolean = true;
  registerHidden: boolean = false;

  counter$: Observable<number>;
  count = 5;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private datePipe: DatePipe, private route: Router){
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue', 
      dateInputFormat: 'DD MMMM YYYY',
    });
    this.datePickerConfig.dateInputFormat = 'M';
    this.counter$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

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

  ngOnInit(){
    this.getUserById(Number);
  	this.userForm = this.formBuilder.group({
      id: [''],
      phone: ['', Validators.required],
  		firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: [''],
      gender: [''],
  		email: ['', [Validators.required, Validators.email]],
  	});
  }

  onSubmit(){
    const body = this.userData;
    body.dob   = this.datePipe.transform(body.dob, 'yyyy-MM-dd');
  	this.submitted = true;
  	if(this.userForm.invalid == true){
  		return;
  	}else{
      this.registered = true;
      this.loginHidden = false;
      this.registerHidden = true
      setTimeout(() => {
        this.route.navigate(['login']);
      }, 5000);      
    }
    this.createClient();
  }

  createClient() {
    this.userService.addUser(this.userData)
    .subscribe((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  getAllUser() {
    this.userService.getUser()
      .subscribe(res => {
        console.log(res);
        this.user_data = res;
      }, err => {},
      )
  }

  getUserById(id) {
    this.userService.getUserById(id)
      .subscribe(res => {
        console.log(res);
      }, err => {},
      )
  }
};