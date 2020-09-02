import { UserModel } from './user-model';
import { NavPage } from './nav-page.enum';

export class AppData {

  title: string = 'Stock Manager';
  apiRootURL: string = 'https://d6c62a0cc134.ngrok.io';

  user: UserModel = new UserModel();
  isAuthenticated: boolean = false;
  currentIPAddress: string = '';
  loginInProgress: boolean = true;
  createAccountProgress: boolean = true;

  page: NavPage = NavPage.landing;

  query: string = '';

  constructor() {
    this.title = 'Stock Manager'
    this.apiRootURL = 'https://d6c62a0cc134.ngrok.io'
    this.user = new UserModel();
    this.isAuthenticated = false
    this.currentIPAddress = ''
    this.page = NavPage.landing
    this.query = '';
  }

}
