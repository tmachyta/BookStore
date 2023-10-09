package webapplication.mapper;

import webapplication.config.MapperConfig;
import webapplication.dto.category.CategoryDto;
import webapplication.dto.category.CreateCategoryRequestDto;
import webapplication.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = MapperConfig.class)
public interface CategoryMapper {
    CategoryDto toDto(Category category);

    @Mapping(target = "id", ignore = true)
    Category toModel(CreateCategoryRequestDto createCategoryRequestDto);
}
