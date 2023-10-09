package webapplication.service.shoppingcart;

import webapplication.dto.shoppingcart.ShoppingCartDto;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface ShoppingCartService {
    ShoppingCartDto getByUserId(Long userId);

    List<ShoppingCartDto> getAll(Pageable pageable);

    void deleteById(Long id);
}
