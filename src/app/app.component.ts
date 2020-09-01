import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../app/messaging.service'
import { Subscription } from 'rxjs';
import { AppData } from './app-data';
import { UserModel } from './user-model';
import { UserRole } from './user-role';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  appData: AppData;
  subscription = new Subscription();
  title = 'Stock Manager'

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription.add(messageService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ AppComponent')
      }));
      console.log('Subscription created @ AppComponent')
  }
  ngOnInit() {
    // this.appData = new AppData()
    // this.updateObserver()
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.messageService.sendMessage(this.appData);
  }

}
