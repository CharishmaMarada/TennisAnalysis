import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {combineAll} from "rxjs/operators";
import {Router, RouterModule} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  setNums : number[] = []
  p1Data:any[] = [];
  p2Data:any[] = [];
  startNumber = 0;
  max_sets = 6;

  constructor(public router:Router,public apiService:ApiService) { }
  ngOnInit(): void {
  }

  addSetClicked() {
    this.startNumber = this.startNumber + 1
    if (this.startNumber < this.max_sets){
      this.setNums.push(this.startNumber)
    }


  }

  submitClicked() {
    let _data = []
    for (var i=0; i<this.startNumber+1; i++) {
      if (this.p1Data[i] != null){
        let _s1 = this.prepareData(1,i,Number(this.p1Data[i]))
        _data.push(_s1)
      }
      if (this.p2Data[i] != null){
        let _s2 = this.prepareData(2,i,Number(this.p2Data[i]))
        _data.push(_s2)
      }
    }
    this.apiService.setData = _data
    let route = '/set-res';
    this.router.navigateByUrl(route)

  }
  prepareData(player:number,set:number,score:number) {
    return {
      "player" : player,
      "set": set,
      "score": score
    }
  }
}

export  interface set {
  player: number;
  setNumber: number;
  score: number
}
