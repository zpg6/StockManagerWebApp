import { Component, OnInit, Input } from '@angular/core';
import { ButtonColor } from '../button-color'
import { ButtonStyle } from '../button-style'
import { ButtonSize } from '../button-size'
@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() button: IconButtonModel;

  constructor() { }

  ngOnInit(): void {
  }

  printDetails() {
    // this.button.classAdditions = ' is-loading'
    // console.log('result: ' + this.getButtonSize() + this.getButtonColor() + this.getButtonStyle() + this.getClassAdditions())
  }

  getButtonClassString() {
    //console.log('result: ' + this.getButtonSize() + this.getButtonColor() + this.getButtonStyle() + this.getClassAdditions())
    return this.getButtonSize() + this.getButtonColor() + this.getButtonStyle() + this.getClassAdditions()
  }

  //function to get button color as a string
  getButtonColor() {
    if (this.button.color !== null) {
      //console.log('button color:' + this.button.color)
      return ' ' + this.button.color
    } else {
      return ''
    }
  }

  //function to return button style as a string
  getButtonStyle() {
    if (this.button.style !== null) {
      return ' ' + this.button.style
    } else {
      return ''
    }
  }

  //function to return button size as a string
  getButtonSize() {
    if (this.button.size !== null) {
      //console.log('button size:' + this.button.size)
      return ' ' + this.button.size
    } else {
      return ''
    }
  }

  //function to return class additions as a string
  getClassAdditions() {
    if (this.button.classAdditions !== null) {
      return ' ' + this.button.classAdditions
    } else {
      return ''
    }
  }

}

//custom class for Icon Buttons
export class IconButtonModel {
  title: string;
  link: string;
  iconSuffix: string;
  color: ButtonColor;
  style: ButtonStyle;
  size: ButtonSize;
  classAdditions: string;
  clickFunction: ()=>void;
  disabled: boolean;
}
