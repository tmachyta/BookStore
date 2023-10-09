import {CartItemDto} from "./cart-item-dto";

export class ShoppingCartDto {
  id: number = 0;
  userId: number = 0;
  cartItemDtoSet: CartItemDto[] = [];
}
