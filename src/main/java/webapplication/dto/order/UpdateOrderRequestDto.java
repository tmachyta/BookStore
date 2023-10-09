package webapplication.dto.order;

import webapplication.model.Order;
import lombok.Data;

@Data
public class UpdateOrderRequestDto {
    private Order.Status status;
}
