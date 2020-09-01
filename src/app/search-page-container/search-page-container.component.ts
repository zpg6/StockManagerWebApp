import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';
import { UserRole } from '../user-role';

@Component({
  selector: 'app-search-page-container',
  templateUrl: './search-page-container.component.html',
  styleUrls: ['./search-page-container.component.css']
})
export class SearchPageContainerComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = new Subscription()
      this.subscription.add(this.messageService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ SearchPageContainerComponent')
      }));
      console.log('Subscription created @ SearchPageContainerComponents')
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

}
