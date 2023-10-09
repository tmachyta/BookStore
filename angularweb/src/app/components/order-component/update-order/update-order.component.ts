import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UpdateOrderRequestDto } from "../../../model/order/update-order-request-dto";
import { OrderService } from "../../../service/order/order.service";
import { OrderDto } from "../../../model/order/order-dto";

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderId: number = 0;
  updatedOrder: UpdateOrderRequestDto = {
    status: ''
  };

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['id']; // Преобразуйте параметр 'id' в число
      if (this.orderId) {
        this.loadOrder(this.orderId);
      }
    });
  }

  loadOrder(id: number): void {
    this.orderService.findById(id).subscribe(
      (order: OrderDto) => {
        this.updatedOrder.status = order.status;
      },
      (error) => {
        console.error('Error loading order:', error);
      }
    );
  }

  clearForm(): void {
    this.updatedOrder.status = '';
  }

  updateOrder(): void {
    if (!this.orderId) {
      console.error('Order ID is required for updating.');
      return;
    }

    this.orderService.updateOrder(this.orderId, this.updatedOrder).subscribe(
      () => {
        console.log('Order updated successfully.');
        this.clearForm();
        this.router.navigate(['/api/orders']);
      },
      (error) => {
        console.error('Error updating order:', error);
      }
    );
  }
}
