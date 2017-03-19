import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise'

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  getPlayer(playerId: number): Promise<any> {
    return this.http.get(`/data/players/${playerId}.json`)
      .toPromise()
      .then(player => player.json())
  }

  getPlayer2(playerId: number): Observable<any> {
    return this.http.get(`/data/players/${playerId}.json`)
      .map(player => player.json());
  }

}
