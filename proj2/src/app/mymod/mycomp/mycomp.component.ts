import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  user: string = "";
  response: any;

  constructor(private serv: MyserviceService, private http_client: HttpClient) {
    this.serv.printLog("component: getting service");
  }


  ngOnInit() {
  }

  getApiResponse() {
	this.http_client.get('https://api.github.com/users/' + this.user)
	.subscribe( (response) => {
		this.response = response;
		if(response) {
			console.log(this.response);
		}
	},
	(err) => {
		console.log('error occured : ', err);
	});
  }
}
