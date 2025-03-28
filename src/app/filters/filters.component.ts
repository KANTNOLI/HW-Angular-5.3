import { Component } from '@angular/core';
import { CartMemoryService } from '../cart-memory.service';
import { Carts } from '../interfaces/Carts.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  search: string = '';
  adCarts: Carts = [];
  adCartsFilter: Carts = [];
  history: number = -1;

  constructor(private cartsArrays: CartMemoryService) {
    this.adCarts = [...this.cartsArrays.getArray()];
    this.adCartsFilter = [...this.cartsArrays.CartsFilter.value];
  }

  searchUpdate(search: string) {
    this.adCartsFilter = this.adCarts.filter((cart) =>
      cart.title.toLowerCase().includes(search.toLowerCase())
    );

    this.cartsArrays.setFilter(this.adCartsFilter);
  }

  sortArray(type: number) {
    if (this.history == type) {
      this.adCartsFilter.reverse();
      this.cartsArrays.setFilter(this.adCartsFilter);
    } else {
      switch (type) {
        case 1:
          this.adCartsFilter.sort((a, b) => a.price - b.price);
          break;
        default:
          this.adCartsFilter.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return -1;
            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
      }

      this.cartsArrays.setFilter(this.adCartsFilter);
      this.history = type
    }
  }
}
