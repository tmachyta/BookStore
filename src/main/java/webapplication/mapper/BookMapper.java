package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.book.BookDto;
import webapplication.dto.book.CreateRequestBookDto;
import webapplication.model.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapperConfig.class)
public interface BookMapper {
    BookDto toDto(Book book);

    @Mapping(target = "id", ignore = true)
    Book toModel(CreateRequestBookDto requestBookDto);
}
