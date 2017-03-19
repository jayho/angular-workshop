import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageOfTheDayComponent } from './message-of-the-day/message-of-the-day.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ClockComponent } from './clock/clock.component';

import { AppRoutingModule } from './app-routing.component';
import { ShoppingCartService } from "./shopping-cart.service";
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { Clock2Component } from './clock2/clock2.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageOfTheDayComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    AddItemComponent,
    ClockComponent,
    LeaderboardComponent,
    Clock2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
