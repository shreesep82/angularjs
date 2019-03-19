import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {


  constructor(private serv: MyserviceService) {
    this.serv.printLog("component: getting service");
  }


  ngOnInit() {
  }

}
