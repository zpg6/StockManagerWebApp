import { UserModel } from './user-model';
import { NavPage } from './nav-page.enum';

export class AppData {

  title: string = 'Stock Manager';
  apiRootURL: string = 'http://localhost:9000';

  user: UserModel = new UserModel();
  isAuthenticated: boolean = false;
  currentIPAddress: string = '';
  loginInProgress: boolean = true;
  createAccountProgress: boolean = true;

  page: NavPage = NavPage.landing;

  query: string = '';

  constructor() {
    this.title = 'Stock Manager'
    this.apiRootURL = 'http://localhost:9000'
    this.user = new UserModel();
    this.isAuthenticated = false
    this.currentIPAddress = ''
    this.page = NavPage.landing
    this.query = '';
  }

}
