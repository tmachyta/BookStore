package webapplication.service.book;

import webapplication.dto.book.BookDto;
import webapplication.dto.book.BookSearchParametersDto;
import webapplication.dto.book.CreateRequestBookDto;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface BookService {
    BookDto save(CreateRequestBookDto createRequestBookDto);

    List<BookDto> getAll(Pageable pageable);

    BookDto findById(Long id);

    void deleteById(Long id);

    List<BookDto> search(BookSearchParametersDto params);

    BookDto update(Long id, CreateRequestBookDto requestBookDto);
}
