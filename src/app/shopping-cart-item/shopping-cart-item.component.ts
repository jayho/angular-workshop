import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input()
  item: any

  @Output()
  itemRemoved = new EventEmitter()

  remove() {
    this.itemRemoved.next(this.item);
  }

}
