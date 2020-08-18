import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {

  appData: AppData;
  subscription = new Subscription();
  tab = 'Login'
  @ViewChild('modal') modal: ElementRef;

  @ViewChild('loginTab') loginTab: ElementRef;
  @ViewChild('createAnAccountTab') createAnAccountTab: ElementRef;

  @ViewChild('invitationCodeField') invitationCodeField: ElementRef;
  @ViewChild('firstNameField') firstNameField: ElementRef;
  @ViewChild('lastNameField') lastNameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('passwordField') passwordField: ElementRef;
  @ViewChild('confirmPasswordField') confirmPasswordField: ElementRef;

  invitationCodeError;
  firstNameError;
  lastNameError;
  emailError = 'sajklasJKLASKJLas';
  passwordError;
  confirmPasswordError;

  notificationContent: string = '';
  setNotification(to: string) {
    this.notificationContent = to
  }
  hideNotification() {
    this.notificationContent = ''
  }
  showNotification(): boolean {
    return this.notificationContent !== ''
  }

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

  toggleTab() {
    this.tab = (this.tab === 'Login') ? 'Create an Account':'Login'
    this.loginTab.nativeElement.classList.toggle('is-active')
    this.createAnAccountTab.nativeElement.classList.toggle('is-active')
  }

  loginUser() {
    if (this.findErrors() == 0) {
      // perform login
      this.toggleModalOpen()
    }
  }

  findErrors(): number {
    var count = 0;




    return count
  }


}
