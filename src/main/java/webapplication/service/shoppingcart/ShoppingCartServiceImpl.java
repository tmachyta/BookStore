package webapplication.service.shoppingcart;

import webapplication.dto.shoppingcart.ShoppingCartDto;
import webapplication.mapper.ShoppingCartMapper;
import webapplication.model.ShoppingCart;
import webapplication.repository.shoppingcart.ShoppingCartRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {
    private final ShoppingCartRepository shoppingCartRepository;
    private final ShoppingCartMapper shoppingCartMapper;

    @Override
    public ShoppingCartDto getByUserId(Long userId) {
        ShoppingCart shoppingCart = shoppingCartRepository.findByUserId(userId);
        if (shoppingCart == null) {
            throw new RuntimeException("Can't find shoppingCart by user " + userId);
        }
        return shoppingCartMapper.toDto(shoppingCart);
    }

    @Override
    public List<ShoppingCartDto> getAll(Pageable pageable) {
        return shoppingCartRepository.findAll(pageable)
                .stream()
                .map(shoppingCartMapper::toDto)
                .toList();
    }

    @Override
    public void deleteById(Long id) {
        shoppingCartRepository.deleteById(id);
    }
}
