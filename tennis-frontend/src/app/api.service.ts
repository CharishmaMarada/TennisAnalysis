import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {parse} from "@angular/compiler/src/render3/view/style_parser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  setData!: { score: number; set: number; player: number }[];
  gameData!: { set:number, gameWinner: number, p1Score: number, p2Score: number,p1gameScore: number,p2gameScore: number}[];

  constructor(private http:HttpClient) { }
  public sharedData ="";
  readonly ROOT_URL = "http://127.0.0.1:5000";

  res: any;
  options = {
    responseType: 'text' as const,
  };

  httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };


  check(body:{}) {
    console.log("shared data");
    return this.http.post<text>(this.ROOT_URL+"/hello",body);
  }

  getMatchWon(body: { player: string }) {
    return this.http.post<count>(this.ROOT_URL+"/match_won_count",body);
  }

  getMatch(matchId: any) {
    let body = {"matchId":matchId}
    return this.http.post<text>(this.ROOT_URL+"/get_match",body);
  }

  getMatchRes( player: string) {
    let body = {'player': player}
    return this.http.post<textany>(this.ROOT_URL+"/match_won",body);
  }

  getSetScore(setData: { score: number; set: number; player: number }[]) {
    return this.http.post<sets>(this.ROOT_URL+"/set_score",setData);
  }

  getGameScore(gameData: {set:number, gameWinner: number, p1Score: number, p2Score: number,p1gameScore: number,p2gameScore: number }[]) {
    return this.http.post<sets>(this.ROOT_URL+"/game_score",gameData);
  }
}

export  interface text {
  text: string;
}

export  interface count {
  text: number;
}

export  interface textany {
  text: any;
}

export interface sets {
  p1: number,
  p2: number,
  matches: any
}
