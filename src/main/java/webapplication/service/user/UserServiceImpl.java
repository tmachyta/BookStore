package webapplication.service.user;

import webapplication.dto.user.UserRegistrationRequest;
import webapplication.dto.user.UserResponseDto;
import webapplication.dto.user.UserResponseRoleDto;
import webapplication.exception.EntityNotFoundException;
import webapplication.exception.RegistrationException;
import webapplication.mapper.UserMapper;
import webapplication.model.Role;
import webapplication.model.Role.RoleName;
import webapplication.model.User;
import webapplication.repository.role.RoleRepository;
import webapplication.repository.user.UserRepository;
import webapplication.service.role.RoleService;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;
    private final RoleRepository roleRepository;

    @Override
    public UserResponseDto register(UserRegistrationRequest request) throws RegistrationException {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RegistrationException("Unable to complete registration");
        }

        if (!request.getPassword().equals(request.getRepeatPassword())) {
            throw new RegistrationException("Passwords do not match");
        }

        User user = userMapper.toModel(request);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        Role userRole = roleService.getRoleByRoleName(RoleName.USER);
        user.setRoles(new HashSet<>(Set.of(userRole)));
        return userMapper.toDto(userRepository.save(user));
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<UserResponseDto> getAll(Pageable pageable) {
        return userRepository.findAll(pageable)
                .stream()
                .map(userMapper::toDto)
                .toList();
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Can't find user by id " + id));
        return userMapper.toDto(user);
    }

    @Override
    public UserResponseRoleDto updateByRole(String email, Role roleName) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new EntityNotFoundException("Can't find user by email " + email));
        Role role = roleRepository.findRoleByRoleName(roleName.getRoleName())
                .orElseThrow(() ->
                        new EntityNotFoundException("Can't find role by roleName " + roleName));
        Set<Role> roles = user.getRoles();
        roles.add(role);
        user.setRoles(roles);
        return userMapper.toUserRoleResponse(userRepository.save(user));
    }
}
