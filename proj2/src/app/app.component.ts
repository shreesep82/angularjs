import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj2';

  constructor(private serv: MyserviceService, private http_client: HttpClient) {
    this.serv.printLog("getting service");
  }

    ngOnInit() {
	let obs = this.http_client.get('https://api.github.com/users/shreesep82');
	obs.subscribe( (response) => {
		console.log(response);
        });
    }

}
