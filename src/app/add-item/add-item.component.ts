import { Component, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from "../shopping-cart.service";

export class Item {
  constructor(public itemName: string, public price: number) {
  }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  model = new Item('', 0)

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  @Output()
  itemAdded = new EventEmitter()

  addItem() {
    console.log('Adding item', this.model.itemName, this.model.price)
    this.shoppingCartService.add({ name: this.model.itemName, price: this.model.price })
    // this.itemAdded.next({ name: this.model.itemName, price: this.model.price})
    this.model = new Item('', 0)
  }

}
