package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.shoppingcart.cartitem.CartItemDto;
import webapplication.dto.shoppingcart.cartitem.CreateCartItemRequestDto;
import webapplication.dto.shoppingcart.cartitem.UpdateCartItemDto;
import webapplication.model.CartItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapperConfig.class)
public interface CartItemMapper {
    CartItemDto toDto(CartItem cartItem);

    @Mapping(target = "id", ignore = true)
    CartItem toModel(CreateCartItemRequestDto cartItemRequestDto);

    @Mapping(target = "id", ignore = true)
    CartItem toModel(UpdateCartItemDto updateCartItemDto);
}
