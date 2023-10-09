import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {OrderItemDto} from "../../../model/order/order-item-dto";

@Injectable({
  providedIn: 'root',
})
export class OrderItemService {
  private apiUrl = 'http://localhost:8080/api/orders/order-items';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return {headers};
  }

  getByBookId(bookId: number): Observable<OrderItemDto> {
    const url = `${this.apiUrl}/book/${bookId}`;
    return this.http.get<OrderItemDto>(url, this.getHttpOptions());
  }

  findById(id: number): Observable<OrderItemDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<OrderItemDto>(url, this.getHttpOptions());
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.getHttpOptions());
  }
}
