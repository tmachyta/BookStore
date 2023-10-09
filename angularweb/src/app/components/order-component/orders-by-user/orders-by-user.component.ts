import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../service/order/order.service';
import { OrderDto } from '../../../model/order/order-dto';
import { OrderItemDto } from '../../../model/order/order-item-dto'; // Додайте імпорт OrderItemDto

@Component({
  selector: 'app-orders-by-user',
  templateUrl: './orders-by-user.component.html',
  styleUrls: ['./orders-by-user.component.css']
})
export class OrdersByUserComponent implements OnInit {
  userId: number = 0;
  order: OrderDto | null = null;
  orderItems: OrderItemDto[] = []; // Додайте поле для зберігання товарів

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
      if (this.userId) {
        this.loadOrdersByUser(this.userId);
      }
    });
  }

  loadOrdersByUser(userId: number): void {
    this.orderService.getByUserId(userId).subscribe(
      (order: OrderDto) => {
        this.order = order;
        this.orderItems = order.orderItems; // Отримайте список товарів з замовлення
      },
      (error) => {
        console.error('Error loading orders by user:', error);
      }
    );
  }
}
