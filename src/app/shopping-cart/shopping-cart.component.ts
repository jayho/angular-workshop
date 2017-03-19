import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  private items: any[];

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  ngOnInit() {
    this.items = this.shoppingCartService.items;
  }

  remove(itemToRemove) {
    this.shoppingCartService.remove(itemToRemove)
  }

  add(itemToAdd) {
    this.shoppingCartService.add(itemToAdd)
  }

}
