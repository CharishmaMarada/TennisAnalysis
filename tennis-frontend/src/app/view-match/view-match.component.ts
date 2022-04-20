import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.css']
})
export class ViewMatchComponent implements OnInit {
  matchId: any;
  data = {};
  constructor(public route:ActivatedRoute, public apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.matchId = params.id;
        }
      );
    this.apiService.getMatch(this.matchId).subscribe(params => {
        console.log("getMatch:",params); // { orderby: "price" }
        this.data = params.text;
      }
    );
  }


}
