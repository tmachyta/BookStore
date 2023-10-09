package webapplication.repository.shoppingcart.cartitem;

import webapplication.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByBookId(Long bookId);
}
