import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconButtonModel } from '../icon-button/icon-button.component';
import { ButtonColor } from '../button-color';
import { ButtonSize } from '../button-size';
import { ButtonStyle } from '../button-style';
import { AppData } from '../app-data';
import { Subscription } from 'rxjs';
import { MessageService } from '../messaging.service';
import { NavPage } from '../nav-page.enum';

@Component({
  selector: 'app-hero-main',
  templateUrl: './hero-main.component.html',
  styleUrls: ['./hero-main.component.css']
})
export class HeroMainComponent implements OnInit {


  loginButton: IconButtonModel;

  appData: AppData;
  subscription = new Subscription();

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription.add(this.messageService.getMessage().subscribe(message => {
        this.appData = message;
        console.log('Subscription updated @ HeroMainComponent')
      }));
      console.log('Subscription created @ HeroMainComponent')
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
    //set styling variables
    this.loginButton = new IconButtonModel()
    this.loginButton.title = 'Login'
    this.loginButton.iconSuffix = 'login-variant'
    this.loginButton.link = '#'
    this.loginButton.color = ButtonColor.white
    this.loginButton.size = ButtonSize.large
    this.loginButton.style = ButtonStyle.outlined
    this.loginButton.classAdditions = 'is-rounded'
    this.loginButton.clickFunction = this.loginButtonClicked
  }
  loginButtonClicked(){
    this.appData.page = NavPage.loginModal
    this.updateObserver()
  }
}
