export class CreateOrderRequestDto {
  shippingAddress: string = '';
  userId: string = '';
  status: string = '';
  total: number = 0;
}
