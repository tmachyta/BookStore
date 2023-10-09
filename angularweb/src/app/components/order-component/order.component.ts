import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../../model/order/order-dto';
import {OrderService} from "../../service/order/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: OrderDto[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAll().subscribe(
      (data: OrderDto[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  deleteOrder(id: number): void {
    this.orderService.deleteById(id).subscribe(
      () => {
        console.log('Order deleted successfully.');
        this.loadOrders();
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
}
