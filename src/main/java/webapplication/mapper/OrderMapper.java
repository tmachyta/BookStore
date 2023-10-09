package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.order.CreateOrderRequestDto;
import webapplication.dto.order.OrderDto;
import webapplication.model.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapperConfig.class)
public interface OrderMapper {

    OrderDto toDto(Order order);

    @Mapping(target = "id", ignore = true)
    Order toModel(CreateOrderRequestDto orderRequestDto);
}
