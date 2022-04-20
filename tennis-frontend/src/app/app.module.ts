import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from "@angular/material/form-field";
import  {MatInputModule} from "@angular/material/input";
import  {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDialogModule} from "@angular/material/dialog";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { ResultComponent } from './result/result.component';
import { ChartsModule} from "ng2-charts";
import {MatTableModule} from "@angular/material/table";
import { ViewMatchComponent } from './view-match/view-match.component';
import {NgxJsonViewerModule} from "ngx-json-viewer";
import { MainComponent } from './main/main.component';
import { LandComponent } from './land/land.component';
import { TestComponent } from './test/test.component';
import { SetResComponent } from './set-res/set-res.component';
import { PointComponent } from './point/point.component';
import { PointResComponent } from './point-res/point-res.component';
import {MatSelectModule} from "@angular/material/select";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResultComponent,
    ViewMatchComponent,
    MainComponent,
    LandComponent,
    TestComponent,
    SetResComponent,
    PointComponent,
    PointResComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    ClipboardModule,
    ReactiveFormsModule,
    ChartsModule,
    MatTableModule,
    NgxJsonViewerModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
