import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CartItemDto} from "../../../model/shoppingcart/cart-item-dto";
import {UpdateCartItemDto} from "../../../model/shoppingcart/update-cart-item-dto";
import {CreateCartItemRequestDto} from "../../../model/shoppingcart/create-cart-item-request-dto";


@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private apiUrl = 'http://localhost:8080/api/shopping-cart/cart-items';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return {headers};
  }

  getByBookId(bookId: number): Observable<CartItemDto> {
    const url = `${this.apiUrl}/book/${bookId}`;
    return this.http.get<CartItemDto>(url, this.getHttpOptions());
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto): Observable<CartItemDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<CartItemDto>(url, updateCartItemDto, this.getHttpOptions());
  }

  addBook(cartItemRequestDto: CreateCartItemRequestDto): Observable<CartItemDto> {
    return this.http.post<CartItemDto>(this.apiUrl, cartItemRequestDto, this.getHttpOptions());
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.getHttpOptions());
  }
}
