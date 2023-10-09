package webapplication.service.order;

import webapplication.dto.order.CreateOrderRequestDto;
import webapplication.dto.order.OrderDto;
import webapplication.dto.order.UpdateOrderRequestDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.mapper.OrderMapper;
import webapplication.model.Order;
import webapplication.repository.order.OrderRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    @Override
    public OrderDto update(Long id, UpdateOrderRequestDto requestDto) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find order by id " + id));
        order.setStatus(requestDto.getStatus());
        return orderMapper.toDto(orderRepository.save(order));
    }

    @Override
    public OrderDto addOrder(CreateOrderRequestDto createOrderRequestDto) {
        Order order = orderMapper.toModel(createOrderRequestDto);
        return orderMapper.toDto(orderRepository.save(order));
    }

    @Override
    public OrderDto getByUserId(Long userId) {
        Order order = orderRepository.findByUserId(userId);
        if (order == null) {
            throw new RuntimeException("Can't find order by userId " + userId);
        }
        return orderMapper.toDto(order);
    }

    @Override
    public OrderDto findById(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find order by id " + id));
        return orderMapper.toDto(order);
    }

    @Override
    public List<OrderDto> getAll(Pageable pageable) {
        return orderRepository.findAll(pageable)
                .stream()
                .map(orderMapper::toDto).toList();
    }

    @Override
    public OrderDto getByOrderIdAndOrderItemId(Long orderId, Long orderItemsId) {
        Order order = orderRepository.findByOrderIdAndOrderItemId(orderId, orderItemsId)
                .orElseThrow(() -> new RuntimeException("Order or OrderItem not found"));
        return orderMapper.toDto(order);
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteById(id);
    }
}
