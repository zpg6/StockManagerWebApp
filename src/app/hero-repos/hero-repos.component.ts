import { Component, OnInit } from '@angular/core';
import { IconButtonModel } from '../icon-button/icon-button.component';
import { ButtonColor } from '../button-color';
import { ButtonSize } from '../button-size';
import { ButtonStyle } from '../button-style';

@Component({
  selector: 'app-hero-repos',
  templateUrl: './hero-repos.component.html',
  styleUrls: ['./hero-repos.component.css']
})
export class HeroReposComponent implements OnInit {

  constructor() { }

  repos;

  ngOnInit(): void {
    let webServer = new IconButtonModel()
    let webApp = new IconButtonModel()
    let iosApp = new IconButtonModel()
    let androidApp = new IconButtonModel()


    //set variables for each repository button
    webApp.title = 'Web App'
    webApp.iconSuffix = 'angular'
    webApp.link = '#'
    webApp.color = ButtonColor.danger
    webApp.size = ButtonSize.medium
    webApp.style = ButtonStyle.outlined

    webServer.title = 'Web Server'
    webServer.iconSuffix = 'server'
    webServer.link = '#'
    webServer.color = ButtonColor.info
    webServer.size = ButtonSize.medium
    webServer.style = ButtonStyle.outlined

    iosApp.title = 'iOS App'
    iosApp.iconSuffix = 'apple-ios'
    iosApp.link = '#'
    iosApp.color = ButtonColor.info
    iosApp.size = ButtonSize.medium
    iosApp.style = ButtonStyle.outlined

    androidApp.title = 'Android App'
    androidApp.iconSuffix = 'android'
    androidApp.link = '#'
    androidApp.color = ButtonColor.primary
    androidApp.size = ButtonSize.medium
    androidApp.style = ButtonStyle.outlined

    this.repos = [webApp, webServer, iosApp, androidApp]
  }

}
