import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  user: User = new User({
    id: "", 
		firstname: "", 
    lastname: "",
    phone: "",
    gender: "",
    dob: "",
		email: "", 
  });

	constructor() { }

	ngOnInit(){

	}

}
