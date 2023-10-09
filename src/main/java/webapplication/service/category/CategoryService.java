package webapplication.service.category;

import webapplication.dto.category.CategoryDto;
import webapplication.dto.category.CreateCategoryRequestDto;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface CategoryService {
    CategoryDto save(CreateCategoryRequestDto requestDto);

    List<CategoryDto> getAll(Pageable pageable);

    CategoryDto findById(Long id);

    void deleteById(Long id);

    CategoryDto update(Long id, CreateCategoryRequestDto requestDto);
}
