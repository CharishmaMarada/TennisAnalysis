import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  match_data: match1[] = []
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white'
      }
    }
  };
  public pieChartLabels: Label[] = ['P1','P2'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  heading = "Match Won by player";
  public pieChartColors: Array < any > = [{
    backgroundColor: ['rgba(3, 207, 252,0.5)','rgba(197, 235, 47)' , 'rgba(148,159,177,0.2)'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,1)', 'rgba(148,159,177,1)']
  }];


  constructor(public apiService: ApiService,public router: Router) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    console.log("here:", this.apiService.sharedData);

    this.apiService.getMatchWon({'player': '1'}).subscribe(data => {
      console.log("API response 1:", data.text);
      this.pieChartData.push(data.text);
    });

    this.apiService.getMatchWon({'player': '2'}).subscribe(data => {
      console.log("API response 2:", data.text);
      this.pieChartData.push(data.text);
    });

    this.apiService.getMatchRes(this.apiService.sharedData).subscribe(data => {
      console.log("API res:", data.text);
      data.text.forEach((element: match1) => {
        this.match_data.push(element);
        console.log("match_data : ",element.match_id)
      });
      console.log("match_data in init : ",this.match_data)
    });
  }
  displayedMatchColumns: string[] = ['match_id','p1','p2','match_won'];

  matchClicked(row: match1) {
    let route = '/viewMatch';
    this.router.navigate([route], { queryParams: { id: row.match_id } });
  }
}

export  interface match1 {
  "match_id": string;
  "p1": string;
  "p2": string;
  "match_won": string
}
