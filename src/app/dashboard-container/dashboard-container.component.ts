import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';
import  { UserRole } from '../user-role';
import { NavPage } from '../nav-page.enum';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css', '../../bulma-dashboard.css']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();

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
  }

  isAdmin(): boolean {
    return this.appData.user.userRole == UserRole.admin;
  }

  isDeveloper(): boolean {
    return this.appData.user.userRole == UserRole.developer;
  }

  showSearch(): boolean {
    return this.appData.page == NavPage.search;
  }

  showStores(): boolean {
    return this.appData.page == NavPage.stores;
  }

  showAccounts(): boolean {
    return this.appData.page == NavPage.accounts;
  }

  showAPIKeys(): boolean {
    return this.appData.page == NavPage.apiKeys;
  }

  showResults(): boolean {
    return this.appData.page == NavPage.results;
  }
}
