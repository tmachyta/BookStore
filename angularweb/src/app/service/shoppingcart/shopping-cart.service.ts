import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ShoppingCartDto} from "../../model/shoppingcart/shopping-cart-dto";

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private apiUrl = 'http://localhost:8080/api/shopping-cart'; // Замените на URL вашего API

  constructor(private http: HttpClient) {}
  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return {headers};
  }

  getAll(): Observable<ShoppingCartDto[]> {
    return this.http.get<ShoppingCartDto[]>(this.apiUrl, this.getHttpOptions());
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.getHttpOptions());
  }
}
