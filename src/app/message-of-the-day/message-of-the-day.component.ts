import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-of-the-day',
  templateUrl: './message-of-the-day.component.html',
  styleUrls: ['./message-of-the-day.component.css']
})
export class MessageOfTheDayComponent implements OnInit {
  public motd: string;

  ngOnInit() {
    const messages = ["the early bird catches the worm", "morgenstund hat gold im mund"];
    this.motd = messages[Math.floor(Math.random() * messages.length)]
  }

}
