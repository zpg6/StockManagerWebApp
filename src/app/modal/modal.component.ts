import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  appData: AppData;
  subscription = new Subscription();
  title = 'Stock Manager'
  @ViewChild('modal') modal: ElementRef;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = new Subscription()
      this.subscription.add(this.messageService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ ModalComponent')
      }));
      console.log('Subscription created @ ModalComponent')
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  updateObserver() {
    this.messageService.sendMessage(this.appData);
  }

  ngOnInit() {
    this.appData = this.messageService.getMessageOnce()
  }

  toggleModalOpen() {
    if (this.appData.loginModalOpen) {
      this.modal.nativeElement.classList.toggle('is-active')
    }
    this.appData.loginModalOpen = !this.appData.loginModalOpen
    this.updateObserver()
  }

}
