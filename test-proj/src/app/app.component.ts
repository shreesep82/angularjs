import { Component } from '@angular/core';
import { Object } from './hw/obj.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-proj';

  obj: Object;
  input_text: string = "Initial value";

  constructor() {
        this.obj = new Object()
        this.obj.name = 'shreekanth'
        this.obj.age = 38
  }
}
