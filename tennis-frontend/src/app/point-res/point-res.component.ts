import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-point-res',
  templateUrl: './point-res.component.html',
  styleUrls: ['./point-res.component.css']
})
export class PointResComponent implements OnInit {
  match_data: match1[] = []
  total_count = 0;
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartColors: Array < any > = [
    { backgroundColor: '#0f58b8' },
    { backgroundColor: '#b85b0f'}
  ];

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
    },
    plugins: {
      labels: {
        render: 'percentage',
        fontColor: ['white', 'white'],
        precision: 2
      },
      datalabels: {
        formatter: (value, ctx) => {
          var perc = ((value * 100) / this.total_count).toFixed(0) + "%";
          return perc;
        },
        anchor: 'center',
        align: 'end',
        color: 'white',
        font: {
          weight: 'bold',
          family: 'Lato',
          size: 16,
        }
      },

    }
  };
  public barChartLabels: Label[] = ['Player'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

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
    this.apiService.getGameScore(this.apiService.gameData).subscribe(data => {
      this.barChartData[0].data?.push(data.p1);
      this.barChartData[1].data?.push(data.p2);
      this.total_count = data.p1 + data.p2;
      // this.barChartData[0].label = 'P1 = '+data.p1;
      // this.barChartData[1].label = 'P2 = '+data.p2;

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
