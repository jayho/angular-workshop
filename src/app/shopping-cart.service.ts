import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  items = [
    { name: 'Angular 2 Book', price: 10 },
    { name: 'Fridge', price: 250 },
    { name: 'Socks', price: 20 },
    { name: 'AA Batteries', price: 5 }
  ].sort((a, b) => b.price - a.price)

  remove(itemToRemove) {
    this.items.splice(this.items.indexOf(itemToRemove), 1);
  }

  add(itemToAdd) {
    this.items.push(itemToAdd);
  }

}
