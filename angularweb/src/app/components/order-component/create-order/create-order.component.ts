import { Component, OnInit } from '@angular/core';
import { CreateOrderRequestDto } from "../../../model/order/create-order-request-dto";
import { OrderService } from "../../../service/order/order.service";
import { OrderDto } from "../../../model/order/order-dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orders: OrderDto[] = [];

  newOrder: CreateOrderRequestDto = {
    shippingAddress: '',
    userId: '',
    status: '',
    total: 0
  };

  userId: string = '';
  status: string = '';
  total: number = 0;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getAll().subscribe(
      (orders: OrderDto[]) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  clearForm(): void {
    // Очищаємо форму, просто створюючи новий об'єкт CreateOrderRequestDto зі значеннями за замовчуванням
    this.newOrder = {
      shippingAddress: '',
      userId: '',
      status: '',
      total: 0
    };
  }

  createOrder() {
    const orderToCreate: CreateOrderRequestDto = {
      shippingAddress: this.newOrder.shippingAddress,
      userId: this.userId,
      status: this.status,
      total: this.total,
    };

    this.orderService.addOrder(orderToCreate).subscribe(
      () => {
        this.loadOrders();
        console.log('Order created successfully.');
        this.clearForm();
        this.router.navigate(['/api/orders']);
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }
}
