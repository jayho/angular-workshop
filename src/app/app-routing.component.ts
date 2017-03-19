import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageOfTheDayComponent } from './message-of-the-day';
import { ClockComponent } from "./clock/clock.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { Clock2Component } from "./clock2/clock2.component";

const routes: Routes = [
  { path: 'motd', component: MessageOfTheDayComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'add', component: AddItemComponent },
  { path: 'leader', component: LeaderboardComponent },
  { path: 'clock2', component: Clock2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
