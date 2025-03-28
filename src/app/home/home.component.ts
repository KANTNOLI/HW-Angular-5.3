import { Component } from '@angular/core';
import { CartMemoryService } from '../cart-memory.service';
import { Cart } from '../interfaces/Carts.interface';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  AdObject: Cart = { price: 0, title: 'Loading' };

  constructor(private cartMemory: CartMemoryService) {
    this.AdObject = this.cartMemory.getElement();
  }
}
