import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottie-circle-grow',
  templateUrl: './lottie-circle-grow.component.html',
  styleUrls: ['./lottie-circle-grow.component.css']
})
export class LottieCircleGrowComponent {

  public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;

    constructor() {
        this.lottieConfig = {
            path: 'assets/circleGrow.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }

}
