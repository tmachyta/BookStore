import {Role} from "../role/role";

export class UserResponseRoleDto {
  roles: Role[] = [];

  constructor(roles: Role[]) {
    this.roles = roles;
  }
}
