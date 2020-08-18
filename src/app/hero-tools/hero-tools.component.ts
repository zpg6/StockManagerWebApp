import { Component, OnInit } from '@angular/core';
import { ButtonStyle } from '../button-style';
import { ButtonSize } from '../button-size';
import { ButtonColor } from '../button-color';
import { IconButtonModel } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-hero-tools',
  templateUrl: './hero-tools.component.html',
  styleUrls: ['./hero-tools.component.css']
})
export class HeroToolsComponent implements OnInit {

  tools;


  constructor() { }

  ngOnInit(): void {

    let angular = new IconButtonModel();
    let typescript = new IconButtonModel();
    let bulma = new IconButtonModel();

    angular.title = 'Angular'
    angular.iconSuffix = 'angular'
    angular.link = 'https://angular.io'
    angular.color = ButtonColor.danger
    angular.size = ButtonSize.medium
    angular.style = ButtonStyle.outlined

    typescript.title = 'Typescript'
    typescript.iconSuffix = 'language-typescript'
    typescript.link = 'http://typescriptlang.org'
    typescript.color = ButtonColor.info
    typescript.size = ButtonSize.medium
    typescript.style = ButtonStyle.outlined

    bulma.title = 'Bulma'
    bulma.iconSuffix = 'language-css3'
    bulma.link = 'https://bulma.io'
    bulma.color = ButtonColor.primary
    bulma.size = ButtonSize.medium
    bulma.style = ButtonStyle.outlined

    this.tools = [angular, typescript, bulma]

  }

  print() {
    console.log('hello')
  }

}
