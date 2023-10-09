import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UpdateOrderRequestDto} from "../../model/order/update-order-request-dto";
import {OrderDto} from "../../model/order/order-dto";
import {CreateOrderRequestDto} from "../../model/order/create-order-request-dto";

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return {headers};
  }

  updateOrder(id: number, requestDto: UpdateOrderRequestDto): Observable<OrderDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<OrderDto>(url, requestDto, this.getHttpOptions());
  }

  addOrder(createOrderRequestDto: CreateOrderRequestDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(this.apiUrl, createOrderRequestDto, this.getHttpOptions());
  }

  getByUserId(userId: number): Observable<OrderDto> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<OrderDto>(url, this.getHttpOptions());
  }

  findById(id: number): Observable<OrderDto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<OrderDto>(url, this.getHttpOptions() );
  }

  getAll(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(this.apiUrl, this.getHttpOptions());
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.getHttpOptions());
  }
}
