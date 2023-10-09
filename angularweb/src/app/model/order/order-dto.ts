import {OrderItemDto} from "./order-item-dto";

export class OrderDto {
  id: number = 0;
  userId: number = 0;
  status: string = '';
  total: number = 0;
  orderDate: string = '';
  shippingAddress: string = '';
  orderItems: OrderItemDto[] = [];
}
