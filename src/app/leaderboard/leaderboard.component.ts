import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from '../leaderboard.service'
import { PlayerService } from "../player.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-leaderboard',
  providers: [LeaderboardService, PlayerService],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Promise<any[]>;
  players2: Observable<Observable<any>[]>;
  players3: Observable<Observable<any>[]>;

  constructor(private leaderBoardService: LeaderboardService, private playerService: PlayerService) { }

  ngOnInit() {
    // using assignment via callback
    this.players = this.getLeaderBoard();
    this.players2 = this.getLeaderBoard2();
    this.players3 = this.getLeaderBoard3();
  }

  getLeaderBoard() {
    return this.leaderBoardService.getLeaderBoard()
      .then(leaderboard => leaderboard.map(playerId => this.playerService.getPlayer(playerId)))
      .then(playerPromises => Promise.all(playerPromises));
  }

  getLeaderBoard2() {
    return this.leaderBoardService.getLeaderBoard2()
      .map(leaderBoard => leaderBoard.map(playerId => this.playerService.getPlayer2(playerId)));
  }

  getLeaderBoard3() {
    return this.leaderBoardService.getLeaderBoard2()
      .flatMap((playerIds: number[]) => Observable.forkJoin(...playerIds.map(playerId => this.playerService.getPlayer2(playerId))));
  }

  // can implement this also with a timeout by using delay
  // (which returns a promise that gets rejected after n millis)
  // and Promise.race()

  // can implement this then with decorators and add @timeout
  // to each operations that should time out

}
