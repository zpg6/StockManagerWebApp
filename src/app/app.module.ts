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
    AuthModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
