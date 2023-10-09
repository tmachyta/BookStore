package webapplication.service.role;

import webapplication.model.Role;
import webapplication.model.Role.RoleName;

public interface RoleService {
    Role getRoleByRoleName(RoleName roleName);
}
