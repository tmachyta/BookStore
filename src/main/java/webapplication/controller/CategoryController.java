package webapplication.controller;

import webapplication.dto.category.CategoryDto;
import webapplication.dto.category.CreateCategoryRequestDto;
import webapplication.service.category.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/categories")
public class CategoryController {
    private final CategoryService categoryService;

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping
    @Operation(summary = "Get all categories",
            description = "Get a list of all available categories")
    public List<CategoryDto> findAll(@ParameterObject Pageable pageable) {
        return categoryService.getAll(pageable);
    }

    @PreAuthorize("hasRole('USER') OR hasRole('ADMIN')")
    @GetMapping("/{id}")
    @Operation(summary = "Get category by id", description = "Get available category by id")
    public CategoryDto getCategoryById(@PathVariable Long id) {
        return categoryService.findById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    @Operation(summary = "Save category to repository",
            description = "Save valid category to repository")
    public CategoryDto save(@RequestBody @Valid CreateCategoryRequestDto requestDto) {
        return categoryService.save(requestDto);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete category by id",
            description = "Soft delete of available category by id")
    public void deleteById(@PathVariable Long id) {
        categoryService.deleteById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    @Operation(summary = "Update category by id", description = "Update available category by id")
    public CategoryDto update(@PathVariable Long id,
                              @RequestBody @Valid CreateCategoryRequestDto requestDto) {
        return categoryService.update(id, requestDto);
    }
}
