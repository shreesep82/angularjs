import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hw',
  templateUrl: './hw.component.html',
  styleUrls: ['./hw.component.scss']
})
export class HwComponent implements OnInit {

  msg: string = "hi"
  msg2: any;
  @Input('param') param: string;
  constructor() {
        setInterval( () => {
                this.msg2 = new Date().toDateString()
        }, 1000)
  }

  ngOnInit() {
          this.json_data = { array : [ ['1234', this.param], ['0000', '4321'] ] }
  }

  formatize = (msg: string) => '--' + msg.toUpperCase() + '--'

  json_data: any;

  concat = (someStr: string) => {
          console.log(someStr);
          if(someStr.includes('undefined')) {
                  someStr = '*** Initial ***'
          }
          return this.formatize(someStr) + ' ' + this.formatize(this.msg)
  }

}
