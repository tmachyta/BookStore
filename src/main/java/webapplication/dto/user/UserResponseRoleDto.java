package webapplication.dto.user;

import webapplication.model.Role;
import java.util.Set;
import lombok.Data;

@Data
public class UserResponseRoleDto {
    private Set<Role> roles;
}
