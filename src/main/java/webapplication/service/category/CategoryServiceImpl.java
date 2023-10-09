package webapplication.service.category;

import webapplication.dto.category.CategoryDto;
import webapplication.dto.category.CreateCategoryRequestDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.mapper.CategoryMapper;
import webapplication.model.Category;
import webapplication.repository.category.CategoryRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Override
    public CategoryDto save(CreateCategoryRequestDto requestDto) {
        Category category = categoryMapper.toModel(requestDto);
        return categoryMapper.toDto(categoryRepository.save(category));
    }

    @Override
    public List<CategoryDto> getAll(Pageable pageable) {
        return categoryRepository.findAll(pageable)
                .stream()
                .map(categoryMapper::toDto)
                .toList();
    }

    @Override
    public CategoryDto findById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find category by id " + id));
        return categoryMapper.toDto(category);
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public CategoryDto update(Long id, CreateCategoryRequestDto requestDto) {
        Category existedCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find category by id " + id));
        existedCategory.setName(requestDto.getName());
        existedCategory.setDescription(requestDto.getDescription());
        return categoryMapper.toDto(categoryRepository.save(existedCategory));
    }
}
