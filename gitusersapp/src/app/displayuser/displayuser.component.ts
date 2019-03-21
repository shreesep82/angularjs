import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  user_id: any;
  user_details: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
     this.route.params.subscribe( (params) => {
	this.user_id = params.id;
	console.log('id is ', this.user_id);

	this.getUserDetails();
     });
  }

  getUserDetails() {
	this.http.get('https://api.github.com/users/' + this.user_id)
	.subscribe( (response) => {
		console.log('response ', response);
		this.user_details = response;
	},
	(err) => {
		console.log('error while getting user details via id');
	});
  }

  ngOnInit() {
  }

}
