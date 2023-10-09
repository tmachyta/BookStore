package webapplication.dto.book;

import jakarta.persistence.Column;
import java.math.BigDecimal;
import lombok.Data;

@Data
public class CreateRequestBookDto {
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false, unique = true)
    private String isbn;
    private BigDecimal price;
    private String description;
    private String coverImage;
}
