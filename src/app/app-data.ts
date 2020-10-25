import { UserModel } from './user-model';
import { NavPage } from './nav-page.enum';
import { ItemModel } from './item-model';

export class AppData {

  title: string = 'Stock Manager';
  apiRootURL: string = 'https://smapi.ngrok.io';

  user: UserModel = new UserModel();
  isAuthenticated: boolean = false;
  currentIPAddress: string = '';
  loginInProgress: boolean = true;
  createAccountProgress: boolean = true;

  page: NavPage = NavPage.landing;

  query: string = '';
  queryError: string = '';
  latestQueryResults = Array<ItemModel>();

  addTaskModalOpen = false;

}
