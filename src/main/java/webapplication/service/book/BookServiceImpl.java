package webapplication.service.book;

import webapplication.dto.book.BookDto;
import webapplication.dto.book.BookSearchParametersDto;
import webapplication.dto.book.CreateRequestBookDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.mapper.BookMapper;
import webapplication.model.Book;
import webapplication.repository.book.BookRepository;
import webapplication.repository.book.BookSpecificationBuilder;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final BookMapper bookMapper;
    private final BookSpecificationBuilder bookSpecificationBuilder;

    @Override
    public BookDto save(CreateRequestBookDto createRequestBookDto) {
        Book book = bookMapper.toModel(createRequestBookDto);
        return bookMapper.toDto(bookRepository.save(book));
    }

    @Override
    public List<BookDto> getAll(Pageable pageable) {
        return bookRepository.findAll(pageable)
                .stream().map(bookMapper::toDto)
                .toList();
    }

    @Override
    public BookDto findById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find book by id " + id));
        return bookMapper.toDto(book);
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public List<BookDto> search(BookSearchParametersDto params) {
        Specification<Book> bookSpecification = bookSpecificationBuilder.build(params);
        return bookRepository.findAll(bookSpecification)
                .stream()
                .map(bookMapper::toDto)
                .toList();
    }

    @Override
    public BookDto update(Long id, CreateRequestBookDto requestBookDto) {
        Book existedBook = bookRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find book by id " + id));
        existedBook.setTitle(requestBookDto.getTitle());
        existedBook.setAuthor(requestBookDto.getAuthor());
        existedBook.setIsbn(requestBookDto.getIsbn());
        existedBook.setPrice(requestBookDto.getPrice());
        existedBook.setDescription(requestBookDto.getDescription());
        existedBook.setCoverImage(requestBookDto.getCoverImage());
        return bookMapper.toDto(bookRepository.save(existedBook));
    }
}
