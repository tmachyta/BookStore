export enum RoleName {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export class Role {
  id: number = 0; // Додайте значення за замовчуванням
  roleName: RoleName = RoleName.USER;
}
