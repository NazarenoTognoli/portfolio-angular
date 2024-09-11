//Boilerplate stuff
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { Component } from '@angular/core';

//Components
import { MainPageComponent } from '@page/main-page/main-page.component';
import { MainSectionOneComponent } from '@org/main-section-one/main-section-one.component'
import { MainSectionTwoComponent } from '@org/main-section-two/main-section-two.component'
import { MainSectionThreeComponent } from '@org/main-section-three/main-section-three.component'
import { MainHeaderComponent } from '@mol/main-header/main-header.component';
import { NavButtonComponent } from '@mol/nav-button/nav-button.component';
import { LogoComponent } from '@mol/logo/logo.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainPageComponent, 
    MainSectionOneComponent,
    MainSectionTwoComponent,
    MainSectionThreeComponent,
    MainHeaderComponent, 
    NavButtonComponent, 
    LogoComponent
  ],
  templateUrl: './entry.html',
  styleUrls: ['./entry.sass']
})
export class AppComponent {}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
