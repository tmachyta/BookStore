package webapplication.service.user;

import webapplication.dto.user.UserRegistrationRequest;
import webapplication.dto.user.UserResponseDto;
import webapplication.dto.user.UserResponseRoleDto;
import webapplication.exception.RegistrationException;
import webapplication.model.Role;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface UserService {
    UserResponseDto register(UserRegistrationRequest request) throws RegistrationException;

    void deleteById(Long id);

    List<UserResponseDto> getAll(Pageable pageable);

    UserResponseDto findById(Long id);

    UserResponseRoleDto updateByRole(String email, Role roleName);

}
