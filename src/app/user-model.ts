import { UserRole } from './user-role';

export class UserModel {


  email: string = '';
  firstName: string = '';
  lastName: string = '';
  invitationCode: string = '';
  password: string = '';
  userID: string = '';
  storeID: string = '';
  companyID: string = '';
  userRole: string = UserRole.user;
  ipAddresses: Array<string> = [];
  userLastLogin: Date = null;

}
