package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.shoppingcart.ShoppingCartDto;
import webapplication.model.ShoppingCart;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface ShoppingCartMapper {

    ShoppingCartDto toDto(ShoppingCart shoppingCart);
}
