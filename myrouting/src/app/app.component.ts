import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myrouting';
  view1_link = "view1";


  routes = [
	{ 'link_name' : 'View-2', link : 'view2' }
  ]
}
