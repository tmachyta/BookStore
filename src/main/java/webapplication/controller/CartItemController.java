package webapplication.controller;

import webapplication.dto.shoppingcart.cartitem.CartItemDto;
import webapplication.dto.shoppingcart.cartitem.CreateCartItemRequestDto;
import webapplication.dto.shoppingcart.cartitem.UpdateCartItemDto;
import webapplication.service.shoppingcart.cartitem.CartItemService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/cart/cart-items")
public class CartItemController {
    private final CartItemService cartItemService;

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping("/{bookId}")
    @Operation(summary = "Get cartItem by book id",
            description = "Get available cart item by bookId")
    public CartItemDto getByBookId(@PathVariable Long bookId) {
        return cartItemService.getByBookId(bookId);
    }

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete cart-item by id",
            description = "Soft delete of available cart-item by id")
    public void deleteById(@PathVariable Long id) {
        cartItemService.deleteById(id);
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USER')")
    @PutMapping("/{id}")
    @Operation(summary = "Update cart-item by id",
            description = "Update available cart-item by id")
    public CartItemDto update(@PathVariable Long id,
                              @RequestBody @Valid UpdateCartItemDto requestDto) {
        return cartItemService.update(id, requestDto);
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USER')")
    @PostMapping
    @Operation(summary = "Add book to cartItem", description = "Add valid book to cartItem")
    public CartItemDto addBook(@RequestBody @Valid CreateCartItemRequestDto requestDto) {
        return cartItemService.addBook(requestDto);
    }
}
