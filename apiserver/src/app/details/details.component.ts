import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user_id: Object;
  user: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
     this.route.params.subscribe( params => this.user_id = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user_id).subscribe(
      data => this.user = data
    );
  }

}
