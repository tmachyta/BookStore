package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.order.orderitem.OrderItemDto;
import webapplication.model.OrderItem;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface OrderItemMapper {
    OrderItemDto toDto(OrderItem orderItem);
}
