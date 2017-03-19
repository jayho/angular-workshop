import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']
})
export class Clock2Component implements OnInit {
  // If not forcibly subscribed (see below)
  // => poll once (async in html subscribes) if visible
  // => no poll (async in html unsubscribes) if invisible
  isVisible = false;

  firstValue: number;
  first = Observable.timer(0, 1000);
  second = this.first.map(() => new Date())
  third = this.http.get('/data/players/1.json')
    .map(response => response.json())
    .map(player => player.name);
  fourth = this.first.flatMap(() => this.third);

  constructor(private http: Http) { }

  ngOnInit() {
    // beware memory leaks...
    //   => will remain even if element vanishes from DOM
    this.first.subscribe(value => this.firstValue = value);
    // Forcibly subscribe 
    //   => poll twice (async in html) and here if visible
    //   => poll once (here) if invisible
    // this.fourth.subscribe(value => {});
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
