import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {CreateCartItemRequestDto} from "../../../model/shoppingcart/create-cart-item-request-dto";
import {CartItemService} from "../../../service/shoppingcart/cartItem/cart-item.service";
import {CartItemDto} from "../../../model/shoppingcart/cart-item-dto";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  cartItemRequestDto: CreateCartItemRequestDto = {
    bookId: 0,
    quantity: 0
  };

  constructor(private cartService: CartItemService, private router: Router) { }

  ngOnInit(): void {
  }

  createCartItem(): void {
    this.cartService.addBook(this.cartItemRequestDto).subscribe(
      (cartItem: CartItemDto) => {
        console.log('Book added to cart successfully.');
        this.clearForm();
        this.router.navigate(['/api/shopping-cart/cart-items']);
      },
      (error) => {
        console.error('Error adding book to cart:', error);
      }
    );
  }

  clearForm(): void {
    this.cartItemRequestDto = {
      bookId: 0,
      quantity: 0
    };
  }
}
