package webapplication.controller;

import webapplication.dto.user.UserResponseDto;
import webapplication.dto.user.UserResponseRoleDto;
import webapplication.model.Role;
import webapplication.service.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@RequestMapping(value = "/users")
public class UserController {
    private final UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    @Operation(summary = "Get all users", description = "Get a list of all available users")
    public List<UserResponseDto> findAll(@ParameterObject Pageable pageable) {
        return userService.getAll(pageable);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete user by id", description = "Soft delete of available user by id")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    @Operation(summary = "Get user by id", description = "Get available user by id")
    public UserResponseDto getBookById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{email}/updateRole")
    @Operation(summary = "Update user role by email",
            description = "Update available user role by email")
    public UserResponseRoleDto updateUserRole(@PathVariable String email,
                                              @RequestBody Role roleName) {
        return userService.updateByRole(email, roleName);
    }
}
