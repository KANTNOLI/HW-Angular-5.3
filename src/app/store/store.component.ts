import { Component } from '@angular/core';
import { CartMemoryService } from '../cart-memory.service';
import { Carts } from '../interfaces/Carts.interface';
import { NgFor } from '@angular/common';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-store',
  imports: [NgFor, FiltersComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  adCarts: Carts = [];

  constructor(private cartsArrays: CartMemoryService) {
    this.adCarts = [...this.cartsArrays.CartsFilter.value];

    this.cartsArrays.CartsFilter.subscribe(carts => {
      this.adCarts = carts;
    });
  }
}
