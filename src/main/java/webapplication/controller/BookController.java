package webapplication.controller;

import webapplication.dto.book.BookDto;
import webapplication.dto.book.BookSearchParametersDto;
import webapplication.dto.book.CreateRequestBookDto;
import webapplication.service.book.BookService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Book management", description = "Endpoints for managing books")
@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/books")
public class BookController {
    private final BookService bookService;

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping
    @Operation(summary = "Get all books", description = "Get a list of all available books")
    public List<BookDto> findAll(@ParameterObject Pageable pageable) {
        return bookService.getAll(pageable);
    }

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping("/{id}")
    @Operation(summary = "Get book by id", description = "Get available book by id")
    public BookDto getBookById(@PathVariable Long id) {
        return bookService.findById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    @Operation(summary = "Save book to repository", description = "Save valid book to repository")
    public BookDto save(@RequestBody @Valid CreateRequestBookDto requestDto) {
        return bookService.save(requestDto);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete book by id", description = "Soft delete of available book by id")
    public void deleteById(@PathVariable Long id) {
        bookService.deleteById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    @Operation(summary = "Update book by id", description = "Update available book by id")
    public BookDto update(@PathVariable Long id,
                          @RequestBody @Valid CreateRequestBookDto requestDto) {
        return bookService.update(id, requestDto);
    }

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping("/search")
    @Operation(summary = "Search books", description = "Search books by available parameters")
    public List<BookDto> searchBooks(BookSearchParametersDto searchParameters) {
        return bookService.search(searchParameters);
    }
}
