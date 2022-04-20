import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-set-res',
  templateUrl: './set-res.component.html',
  styleUrls: ['./set-res.component.css']
})
export class SetResComponent implements OnInit {
  match_data: match1[] = []

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor:'white'
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor:'white'
          }
        }
      ]
    },
    legend: {
      display: true,
      labels: {
        fontColor: 'white'
      }
    }
  };
  public barChartLabels: Label[] = ['wins'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'P1' },
    { data: [], label: 'P2' },
  ];

  heading = "Match Won by player";

  constructor(public apiService: ApiService,public router: Router) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.apiService.getSetScore(this.apiService.setData).subscribe(data => {
      this.barChartData[0].data?.push(data.p1);
      this.barChartData[1].data?.push(data.p2);
      data.matches.forEach((element: match1) => {
        this.match_data.push(element);
        console.log("match_data : ",element.match_id)
      });

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
