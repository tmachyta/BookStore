package webapplication.service.order.orderitem;

import webapplication.dto.order.orderitem.OrderItemDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.mapper.OrderItemMapper;
import webapplication.model.OrderItem;
import webapplication.repository.order.orderitem.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class OrderItemServiceImpl implements OrderItemService {
    private final OrderItemRepository orderItemRepository;
    private final OrderItemMapper orderItemMapper;

    @Override
    public OrderItemDto getByBookId(Long bookId) {
        OrderItem orderItem = orderItemRepository.findByBookId(bookId);
        if (orderItem == null) {
            throw new RuntimeException("Can't find orderItem by bookId " + bookId);
        }
        return orderItemMapper.toDto(orderItem);
    }

    @Override
    public OrderItemDto findById(Long id) {
        OrderItem orderItem = orderItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find item by id " + id));
        return orderItemMapper.toDto(orderItem);
    }

    @Override
    public void deleteById(Long id) {
        orderItemRepository.deleteById(id);
    }
}
