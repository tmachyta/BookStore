import {RoleName} from "../role/role";

export class UserRegistrationRequest {
  email: string = '' ;
  password: string = '';
  repeatPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  shippingAddress: string = '';
  role: RoleName = RoleName.USER;
}
