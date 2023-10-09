package webapplication.repository.book;

import webapplication.dto.book.BookSearchParametersDto;
import webapplication.model.Book;
import webapplication.repository.SpecificationBuilder;
import webapplication.repository.SpecificationProviderManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class BookSpecificationBuilder implements SpecificationBuilder<Book> {
    private final SpecificationProviderManager<Book> bookSpecificationProviderManager;

    @Override
    public Specification<Book> build(BookSearchParametersDto searchParametersDto) {
        Specification<Book> spec = Specification.where(null);
        if (searchParametersDto.titles() != null && searchParametersDto.titles().length > 0) {
            spec = spec.and(bookSpecificationProviderManager.getSpecificationProvider("title")
                    .getSpecification(searchParametersDto.titles()));
        }
        if (searchParametersDto.authors() != null && searchParametersDto.authors().length > 0) {
            spec = spec.and(bookSpecificationProviderManager.getSpecificationProvider("author")
                    .getSpecification(searchParametersDto.authors()));
        }
        return spec;
    }
}
