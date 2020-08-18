export class AppData {

  title: string = 'Stock Manager';

  userID: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  storeID: string = '';
  companyID: string = '';

  isAuthenticated: boolean = false;
  currentIPAddress: string = '';
  userLastLogin: Date = null;

  loginModalOpen: boolean = false;

  constructor() {
    this.title = 'Stock Manager'
    this.userID = ''
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.storeID = ''
    this.companyID = ''
    this.isAuthenticated = false
    this.currentIPAddress = ''
    this.userLastLogin = null
    this.loginModalOpen = false
  }

}
