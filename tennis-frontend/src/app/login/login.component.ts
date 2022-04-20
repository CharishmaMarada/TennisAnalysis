import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,public apiService: ApiService) { }
  ngOnInit(): void {
  }

  get_api(setwonp1: string) {
      if (Number(setwonp1)>2 || Number(setwonp1)<1){
        alert("Invalid! Input. Player can be 1 or 2.")
        this._router.navigateByUrl('/login');
      }
      else{
        this.apiService.sharedData = setwonp1;
        this._router.navigateByUrl('/res');
      }


  }
}
