import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private http: HttpClient) { 
	this.http.get('https://api.github.com/users')
	.subscribe( (response) => {
		this.users = response;
	},
	(err) => {
		console.log('error occured while fetching users from github');
	});
  }

  ngOnInit() {
  }

}
