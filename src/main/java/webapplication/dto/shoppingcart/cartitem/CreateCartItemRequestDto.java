package webapplication.dto.shoppingcart.cartitem;

import lombok.Data;

@Data
public class CreateCartItemRequestDto {
    private Long bookId;
    private int quantity;
}

