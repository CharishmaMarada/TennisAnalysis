import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  goToPageLogin() {
    this._router.navigateByUrl('/login');
  }

  goToPageMain() {
    this._router.navigateByUrl('/main');
  }

  goToPagePoint() {
    this._router.navigateByUrl('/point');
  }
}
