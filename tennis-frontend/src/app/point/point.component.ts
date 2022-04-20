import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";



@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  setNums : number[] = []
  p1Data:any[] = [];
  p2Data:any[] = [];
  p1DataGame:any[] = [];
  p2DataGame:any[] = [];

  startNumber = 0;
  max_sets = 5;
  points= [0,15,30,40];
  winData: any[] = [];
  Players= [1,2];


  constructor(public router:Router,public apiService:ApiService) { }
  ngOnInit(): void {
  }

  addSetClicked() {
    this.startNumber = this.startNumber + 1
    if (this.startNumber < this.max_sets){
      this.setNums.push(this.startNumber)
    }
    console.log("set Nums: ",this.setNums);
  }

  submitClicked() {
    let _data = []
    for (var i=0; i<this.startNumber+1; i++) {
      if (this.p1Data[i] != null || this.winData[i] !=null){
        if (i==this.startNumber)
        {
          let _s1 = this.prepareData(i,Number(this.winData[i]),Number(this.p1Data[i]),Number(this.p2Data[i]),Number(this.p1DataGame[0]),Number(this.p2DataGame[0]))
          _data.push(_s1)
        }
        else{
          let _s1 = this.prepareData(i,Number(this.winData[i]),Number(this.p1Data[i]),Number(this.p2Data[i]),-1,-1);
          _data.push(_s1)
        }
      }
    }
    this.apiService.gameData = _data
    let route = '/point-res';
    this.router.navigateByUrl(route)

  }
  prepareData(set:number, gameWinner: number, p1Score: number, p2Score: number,p1gameScore: number,p2gameScore: number) {
    return {
      "set": set,
      "gameWinner": gameWinner,
      "p1Score": p1Score,
      "p2Score": p2Score,
      "p1gameScore": p1gameScore,
      "p2gameScore": p2gameScore
    }
  }

  clearClicked(number: number) {
    this.p1DataGame[0] = undefined;
    this.p2DataGame[0] = undefined;
    this.winData[0] = undefined;
  }
}

export  interface set {
  setNumber: number;
  gameWinner: number;
  p1Score: number;
  p2Score: number;
  p1gameScore: number;
  p2gameScore: number;
}
