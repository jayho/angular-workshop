import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise'

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaderboardService {

  constructor(private http: Http) { }

  getLeaderBoard(): Promise<number[]> {
    return this.http.get("/data/leaderboard.json")
      .toPromise()
      .then(leaderBoard => leaderBoard.json())
  }

  getLeaderBoard2(): Observable<number[]> {
    return this.http.get("/data/leaderboard.json")
      .map(leaderBoard => leaderBoard.json());
  }

}
