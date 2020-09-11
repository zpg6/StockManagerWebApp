import { UserModel } from './user-model';
import { NavPage } from './nav-page.enum';
import { ItemModel } from './item-model';

export class AppData {

  title: string = 'Stock Manager';
  apiRootURL: string = 'https://d163edaf9459.ngrok.io';

  user: UserModel = new UserModel();
  isAuthenticated: boolean = false;
  currentIPAddress: string = '';
  loginInProgress: boolean = true;
  createAccountProgress: boolean = true;

  page: NavPage = NavPage.landing;

  query: string = '';
  queryError: string = '';
  latestQueryResults: Array<ItemModel>;

  constructor() {
    this.title = 'Stock Manager'
    this.apiRootURL = 'https://d163edaf9459.ngrok.io'
    this.user = new UserModel();
    this.isAuthenticated = false
    this.currentIPAddress = ''
    this.page = NavPage.landing
    this.query = '';
    this.latestQueryResults = new Array<ItemModel>();
  }

}
