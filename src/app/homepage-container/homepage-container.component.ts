import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MessageService } from '../messaging.service';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css']
})
export class HomepageContainerComponent implements OnInit, OnDestroy {

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

  login() {
    this.appData.loginModalOpen = true
    this.updateObserver()
  }

}
