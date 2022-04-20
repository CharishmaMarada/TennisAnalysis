import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ResultComponent} from "./result/result.component";
import {ViewMatchComponent} from "./view-match/view-match.component";
import {MainComponent} from "./main/main.component";
import {LandComponent} from "./land/land.component";
import {TestComponent} from "./test/test.component";
import {SetResComponent} from "./set-res/set-res.component";
import {PointComponent} from "./point/point.component";
import {combineAll} from "rxjs/operators";
import {PointResComponent} from "./point-res/point-res.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'res',component:ResultComponent},
  {path:'viewMatch',component:ViewMatchComponent},
  {path: 'main',component:MainComponent},
  {path:'land',component:LandComponent},
  {path:'test',component:TestComponent},
  {path:'set-res',component:SetResComponent},
  {path:'point',component:PointComponent},
  {path:'point-res', component: PointResComponent},
  { path: '**', redirectTo: 'point' }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
