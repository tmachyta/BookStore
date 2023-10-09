package webapplication.service.shoppingcart.cartitem;

import webapplication.dto.shoppingcart.cartitem.CartItemDto;
import webapplication.dto.shoppingcart.cartitem.CreateCartItemRequestDto;
import webapplication.dto.shoppingcart.cartitem.UpdateCartItemDto;

public interface CartItemService {
    CartItemDto getByBookId(Long bookId);

    CartItemDto update(Long id, UpdateCartItemDto updateCartItemDto);

    CartItemDto addBook(CreateCartItemRequestDto cartItemRequestDto);

    void deleteById(Long id);
}
