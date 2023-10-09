package webapplication.service.shoppingcart.cartitem;

import webapplication.dto.shoppingcart.cartitem.CartItemDto;
import webapplication.dto.shoppingcart.cartitem.CreateCartItemRequestDto;
import webapplication.dto.shoppingcart.cartitem.UpdateCartItemDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.mapper.CartItemMapper;
import webapplication.model.CartItem;
import webapplication.repository.shoppingcart.cartitem.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CartItemServiceImpl implements CartItemService {
    private final CartItemRepository cartItemRepository;
    private final CartItemMapper cartItemMapper;

    @Override
    public CartItemDto getByBookId(Long bookId) {
        CartItem cartItem = cartItemRepository.findByBookId(bookId);
        if (cartItem == null) {
            throw new RuntimeException("Can't find cartItem by bookId " + bookId);
        }
        return cartItemMapper.toDto(cartItem);
    }

    @Override
    public CartItemDto update(Long id, UpdateCartItemDto updateCartItemDto) {
        CartItem cartItem = cartItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find cartItem by id " + id));
        cartItem.setQuantity(updateCartItemDto.getQuantity());
        return cartItemMapper.toDto(cartItemRepository.save(cartItem));
    }

    @Override
    public CartItemDto addBook(CreateCartItemRequestDto cartItemRequestDto) {
        CartItem cartItem = cartItemMapper.toModel(cartItemRequestDto);
        return cartItemMapper.toDto(cartItemRepository.save(cartItem));
    }

    @Override
    public void deleteById(Long id) {
        cartItemRepository.deleteById(id);
    }
}
