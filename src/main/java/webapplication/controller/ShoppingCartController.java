package webapplication.controller;

import webapplication.dto.shoppingcart.ShoppingCartDto;
import webapplication.service.shoppingcart.ShoppingCartService;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/cart")
public class ShoppingCartController {
    private final ShoppingCartService shoppingCartService;

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping
    @Operation(summary = "Get all categories",
            description = "Get a list of all available carts")
    public List<ShoppingCartDto> findAll(@ParameterObject Pageable pageable) {
        return shoppingCartService.getAll(pageable);
    }

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping("/{userId}")
    @Operation(summary = "Get shopping cart by user id",
            description = "Get available cart by userId")
    public ShoppingCartDto getByUserId(@PathVariable Long userId) {
        return shoppingCartService.getByUserId(userId);
    }
}
