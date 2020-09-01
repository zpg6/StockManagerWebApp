import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { HeroToolsComponent } from './hero-tools/hero-tools.component';
import { HeroReposComponent } from './hero-repos/hero-repos.component';
import { ModalComponent } from './modal/modal.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { MessageService } from './messaging.service';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { LottieCircleGrowComponent } from './lottie-circle-grow/lottie-circle-grow.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { SearchPageContainerComponent } from './search-page-container/search-page-container.component';
import { SearchPageHowToTextComponent } from './search-page-how-to-text/search-page-how-to-text.component';
import { NumberPadComponent } from './number-pad/number-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageContainerComponent,
    HeroMainComponent,
    HeroToolsComponent,
    HeroReposComponent,
    ModalComponent,
    IconButtonComponent,
    CopyrightComponent,
    AuthModalComponent,
    DashboardContainerComponent,
    LottieCircleGrowComponent,
    AppMenuComponent,
    SearchPageContainerComponent,
    SearchPageHowToTextComponent,
    NumberPadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LottieAnimationViewModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
