import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../service/shoppingcart/shopping-cart.service";
import {ShoppingCartDto} from "../../model/shoppingcart/shopping-cart-dto";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCarts: ShoppingCartDto[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadShoppingCarts();
  }

  loadShoppingCarts(): void {
    this.shoppingCartService.getAll().subscribe(
      (data: ShoppingCartDto[]) => {
        this.shoppingCarts = data;
      },
      (error) => {
        console.error('Error loading shopping carts:', error);
      }
    );
  }

  deleteShoppingCart(id: number): void {
    this.shoppingCartService.deleteById(id).subscribe(
      () => {
        console.log('Shopping cart deleted successfully.');
        this.loadShoppingCarts();
      },
      (error) => {
        console.error('Error deleting shopping cart:', error);
      }
    );
  }
}
