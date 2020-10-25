import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';
import { UserRole } from '../user-role';
import { IconButtonModel } from '../icon-button/icon-button.component';
import { ButtonColor } from '../button-color';
import { ButtonSize } from '../button-size';
import { ButtonStyle } from '../button-style';
import { NavPage } from '../nav-page.enum';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css', '../../bulma-dashboard.css']
})
export class AppMenuComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  logoutButton = new IconButtonModel();

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = new Subscription()
      this.subscription.add(this.messageService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ HomepageContainerComponent')
      }));
      console.log('Subscription created @ HomepageContainerComponent')
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    //update all observers that data has changed
    this.messageService.sendMessage(this.appData);
  }
  ngOnInit() {
    //update shared data of observable
    this.messageService.getMessage()
    this.logoutButton = new IconButtonModel()
    this.logoutButton.title = 'Logout'
    this.logoutButton.iconSuffix = 'power'
    this.logoutButton.link = '#'
    this.logoutButton.color = ButtonColor.dark
    this.logoutButton.size = ButtonSize.small
    this.logoutButton.style = ButtonStyle.outlined
    this.logoutButton.classAdditions = 'is-rounded'
    this.logoutButton.clickFunction = this.logoutButtonClicked
  }

  logoutButtonClicked() {
    this.appData = new AppData();
    this.updateObserver();
  }

  isAdmin(): boolean {
    return this.appData.user.userRole == UserRole.admin;
  }

  isDeveloper(): boolean {
    return this.appData.user.userRole == UserRole.developer;
  }

  toggleSearch() {
    this.appData.page = NavPage.search;
    this.updateObserver();
  }

  toggleTasks() {
    this.appData.page = NavPage.tasks;
    this.updateObserver();
  }

  toggleAssignTasks() {
    this.appData.page = NavPage.assignTasksModal;
    this.updateObserver();
  }

  showSearch(): boolean {
    return this.appData.page == NavPage.search;
  }

  showTasks(): boolean {
    return this.appData.page == NavPage.tasks;
  }

  addTask(): boolean {
    return this.appData.page == NavPage.assignTasksModal;
  }

  showResults():boolean {
    return this.appData.page == NavPage.results;
  }
}
