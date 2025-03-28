import { Injectable } from '@angular/core';
import { Cart, Carts } from './interfaces/Carts.interface';
import { BehaviorSubject } from 'rxjs';

let titles = ['Rand', 'Name', 'World', 'Big', 'Low'];

@Injectable({
  providedIn: 'root',
})
export class CartMemoryService {
  private _Carts: Carts = [];
  CartsFilter = new BehaviorSubject<Carts>([]);

  constructor() {
    this._Carts = [...this.renderCarts(5, 10)];
    this.CartsFilter.next(this._Carts);
  }

  getArray(): Carts {
    return this._Carts;
  }

  setFilter(Array: Carts) {
    this.CartsFilter.next(Array);
  }

  getElement(id: number = 0): Cart {
    if (this._Carts[id]) {
      return this._Carts[id];
    } else {
      return {
        title: 'Undefined',
        price: -1,
      };
    }
  }

  renderCarts(min: number = 5, max: number = 10): Carts {
    return Array.from(
      { length: this.rand(min, max) },
      (): Cart => ({
        title: `"AD ${titles[this.rand(0, titles.length - 1)]}"`,
        price: this.rand(1000, 2000),
      })
    );
  }

  rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
