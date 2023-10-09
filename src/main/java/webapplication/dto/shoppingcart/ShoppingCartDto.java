package webapplication.dto.shoppingcart;

import webapplication.dto.shoppingcart.cartitem.CartItemDto;
import java.util.Set;
import lombok.Data;

@Data
public class ShoppingCartDto {
    private Long id;
    private Long userId;
    private Set<CartItemDto> cartItemSet;
}
